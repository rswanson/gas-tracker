import { Injectable } from '@nestjs/common';

@Injectable()
export class GasService {
  private price: number;

  getPrice(): { price: number } {
    return { price: 0 };
  }
}
