import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import * as client from 'prom-client';

@Injectable()
export class GasService {
  constructor(private httpService: HttpService) {
    const Registry = client.Registry;
    const register = new Registry();
    this.register = register;
    this.gauge_gas_price = new client.Gauge({
      name: 'eth_gas_price',
      help: 'suggested etherium gas price in Gwei',
      labelNames: ['price'],
      collect() {
        const requestURL =
          'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
          process.env.ETHERSCAN_API_KEY;
        axios.get(requestURL).then((response) => {
          const suggestedPrice = response.data.result.suggestBaseFee;
          this.set(Number(suggestedPrice));
        });
      },
      registers: [register],
    });
    this.gauge_eth_price = new client.Gauge({
      name: 'eth_price_usd',
      help: 'price of eth',
      labelNames: ['price'],
      collect() {
        const requestURL =
          'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' +
          process.env.ETHERSCAN_API_KEY;
        axios.get(requestURL).then((response) => {
          const ethPrice = response.data.result.ethusd;
          this.set(Number(ethPrice));
        });
      },
      registers: [register],
    });
  }
  private price;
  private register;
  public gauge_gas_price;
  public gauge_eth_price;

  getGasPrice(): Observable<AxiosResponse> {
    const requestURL =
      'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
      process.env.ETHERSCAN_API_KEY;

    this.price = this.httpService
      .get(requestURL)
      .pipe(map((response) => response.data));
    return this.price;
  }
  getMetrics(): Observable<AxiosResponse> {
    return this.register.metrics();
  }
  getEtherPrice(): Observable<AxiosResponse> {
    const requestURL =
      'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' +
      process.env.ETHERSCAN_API_KEY;
    const etherPrice = this.httpService
      .get(requestURL)
      .pipe(map((response) => response.data));
    return etherPrice;
  }
}
