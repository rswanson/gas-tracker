import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { GasService } from './gas.service';

@Controller('/')
export class GasController {
  constructor(
    private readonly gasService: GasService,
    private readonly httpService: HttpService
  ) {}

  @Get('/etherscan/gas')
  getEtherScanGasPrice() {
    return this.gasService.getGasPrice();
  }

  @Get('/metrics')
  getMetrics() {
    return this.gasService.getMetrics();
  }
  @Get('/etherscan/price')
  getEtherPrice() {
    return this.gasService.getEtherPrice();
  }
}
