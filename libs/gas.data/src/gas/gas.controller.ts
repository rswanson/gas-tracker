import { Controller, Get } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { GasService } from './gas.service';

@Controller('gas')
export class GasController {
  constructor(private readonly gasService: GasService) {}

  @Get()
  getGasPrice() {
    return this.gasService.getPrice();
  }
}
