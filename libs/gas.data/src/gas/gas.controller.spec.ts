import { Test, TestingModule } from '@nestjs/testing';
import { GasController } from './gas.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { GasService } from './gas.service';
import { getEnabledCategories } from 'trace_events';
import { HttpModule, HttpService } from '@nestjs/axios';

describe('GasController', () => {
  let service: GasService;
  let controller: GasController;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GasService],
      controllers: [GasController],
      imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
        ConfigModule.forRoot(),
      ],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    controller = module.get<GasController>(GasController);
    service = module.get<GasService>(GasService);
  });
  describe('getGasPrice', () => {
    it('should return the price of gas', () => {
      expect(controller.getEtherScanGasPrice()).toBeDefined();
    });
  });

  describe('getMetrics', () => {
    it('should return this is fine in json', () => {
      expect(controller.getMetrics()).toEqual({ message: 'this is fine' });
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
  });
});
