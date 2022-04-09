import { Test, TestingModule } from '@nestjs/testing';
import { GasController } from './gas.controller';
import { ScheduleModule } from '@nestjs/schedule';


describe('GasController', () => {
  let controller: GasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GasController],
    }).compile();

    controller = module.get<GasController>(GasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
