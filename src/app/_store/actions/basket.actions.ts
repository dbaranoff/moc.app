import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";

import { Product } from '../../product.model';

function get_action(action) {
  return action;
}

export const Actions = {
  ADD_TO_BASKET: get_action('Add product to Basket'),
  DELETE_FROM_BASKET: get_action('Delete product from Basket')
};

@Injectable()
export class BasketAction  {

  constructor(private store: Store<Product[]>) {}

  getState(): Observable<Product[]> {
    return this.store.select('basket');
  }

  addProduct(product: Product): void {
    this.store.dispatch({
      type: Actions.ADD_TO_BASKET,
      payload: {product}
    });
  }
}
