import { Test, TestingModule } from '@nestjs/testing';
import { GasController } from './gas.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { GasService } from './gas.service';
import { getEnabledCategories } from 'trace_events';

describe('GasController', () => {
  let service: GasService;
  let controller: GasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GasService],
      controllers: [GasController],
    }).compile();

    controller = module.get<GasController>(GasController);
    service = module.get<GasService>(GasService);
  });
  describe('getGasPrice', () => {
    it('should return the price of gas', () => {
      expect(controller.getGasPrice().price).toEqual(0);
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
