import { Injectable, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { GasService } from '../gas/gas.service';
import { GasController } from '../gas/gas.controller';

@Module({
  controllers: [GasController],
  providers: [GasService],
  exports: [],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ConfigModule.forRoot(),
  ],
})
@Injectable()
export class GasDataModule {
  constructor(private httpService: HttpService) {}
}
