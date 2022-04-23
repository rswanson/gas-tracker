import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
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
  });

  it('should map the data from etherscan and return it', () => {
    service.getPrice().subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
  describe('getMetrics', () => {
    it('should return this is fine in json', () => {
      expect(service.getMetrics()).toBeDefined();
    });
  });
});
