import { Injectable, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [HttpModule, ConfigModule.forRoot()],
})
@Injectable()
export class GasDataModule {
  constructor(private httpService: HttpService) {}

  getGasInfo(): Observable<AxiosResponse> {
    const requestURL =
      'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
      process.env.ETHERSCAN_API_KEY;
    return this.httpService.get(requestURL);
  }
}
