import { Controller } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Controller('gas')
export class GasController {
  getGasPrice() {
    return;
  }
}
