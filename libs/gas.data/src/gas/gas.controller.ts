import { Controller } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { GasService } from './gas.service';

@Controller('gas')
export class GasController {
  constructor(private gas: GasService) {}
  getGasPrice() {
    return;
  }
}
