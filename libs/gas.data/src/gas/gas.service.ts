import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

type etherscanPriceData = Observable<AxiosResponse>;

@Injectable()
export class GasService {
  constructor(private httpService: HttpService) {}
  private price;

  getPrice(): etherscanPriceData {
    this.price = this.getGasInfo().pipe(map(response => response.data));
    return this.price ;
  }
  getGasInfo(): etherscanPriceData {
    const requestURL =
      'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
      process.env.ETHERSCAN_API_KEY;
    return this.httpService.get(requestURL);
  }
}
