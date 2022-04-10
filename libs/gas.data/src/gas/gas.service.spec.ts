import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { GasService } from './gas.service';

describe('GasService', () => {
  let service: GasService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GasService],
      imports: [HttpModule]
    }).compile();

    service = module.get<GasService>(GasService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
  });
  it('should return a price', () => {
    expect(service.getGasInfo()).not.toBeUndefined();
    expect(service.getPrice()).not.toBeUndefined();
    });
  });

