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
    this.gauge = new client.Gauge({
      name: 'eth_gas_price',
      help: 'suggested etherium gas price',
      labelNames: ['price'],
      async collect() {
        const requestURL =
          'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
          process.env.ETHERSCAN_API_KEY;
        const priceData = axios.get(requestURL).then((response) => {
          const suggestedPrice = response.data.result.suggestBaseFee;
          console.log(suggestedPrice);
          this.set(Number(suggestedPrice));
        });
      },
      registers: [register],
    });
  }
  private price;
  private register;
  public gauge;

  getPrice(): Observable<AxiosResponse> {
    this.price = this.getGasInfo().pipe(map((response) => response.data));
    return this.price;
  }
  getGasInfo(): Observable<AxiosResponse> {
    const requestURL =
      'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
      process.env.ETHERSCAN_API_KEY;
    return this.httpService.get(requestURL);
  }
  getMetrics() {
    this.gauge.inc();
    return this.register.metrics();
  }
}
