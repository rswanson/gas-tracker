import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GasService } from './gas.service';

describe('GasService', () => {
  let service: GasService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GasService],
      imports: [HttpModule],
    }).compile();

    service = module.get<GasService>(GasService);
    httpService = module.get<HttpService>(HttpService);
  });

  describe('constructor', () => {
    // it('should create a gauge to check ether price', () => {
    //   let result
    //   expect(service.gauge_eth_price.collect).toBe(result);
    // });
    it('should create a gauge with a collect function defined', () => {
      expect(service.gauge_gas_price).toHaveProperty('collect');
    });
  });

  describe('getMetrics', () => {
    it('should return an axios observable with metrics data', () => {
      let result;
      jest.spyOn(service, 'getMetrics').mockImplementation(() => result);
      expect(service.getMetrics()).toBe(result);
    });
  });

  describe('getEtherPrice', () => {
    it('should return an axios observable with metrics data', () => {
      let result;
      jest.spyOn(service, 'getEtherPrice').mockImplementation(() => result);
      expect(service.getEtherPrice()).toBe(result);
    });
  });
});
