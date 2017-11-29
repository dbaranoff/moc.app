import { Injectable } from '@angular/core';

import { BasketAction } from './_store/actions/basket.actions';

import { Product } from './product.model';

@Injectable()
export class BasketService {

  constructor(private ba: BasketAction) { }

  getState() {
    this.ba.getState();
  }

  countSum(products: Product[]): number {
    return 1;
  }

}
