import { Injectable } from '@nestjs/common';

@Injectable()
export class GasService {
  private price: number;

  getPrice() {
    return this.price;
  }
}
