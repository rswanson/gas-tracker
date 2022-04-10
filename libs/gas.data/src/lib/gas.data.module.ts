import { Injectable, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { GasService } from '../gas/gas.service';
import { GasController } from '../gas/gas.controller';

@Module({
  controllers: [GasController],
  providers: [GasService],
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
