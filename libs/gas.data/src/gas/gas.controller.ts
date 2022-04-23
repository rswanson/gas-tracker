import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { GasService } from './gas.service';

@Controller('/gas')
export class GasController {
  constructor(
    private readonly gasService: GasService,
    private readonly httpService: HttpService
  ) {}

  @Get('/etherscan')
  getEtherScanGasPrice() {
    return this.gasService.getPrice();
  }

  @Get('/metrics')
  getMetrics() {
    return this.gasService.getMetrics();
  }
}
