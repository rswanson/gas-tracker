import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { GasService } from './gas.service';

@Controller('/etherscan')
export class GasController {
  constructor(
    private readonly gasService: GasService,
    private readonly httpService: HttpService
  ) {}

  @Get()
  getGasPrice() {
    return this.gasService.getPrice();
  }
}
