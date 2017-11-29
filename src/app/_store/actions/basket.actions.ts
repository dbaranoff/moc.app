import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../reducers';

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

  constructor(private store: Store<IAppState>) { }

  getState(): Observable<any> {
        return this.store.select('basket');
    }

  addProduct(product: Product, quantity: number) {
    console.log('Addint to Basket - ', product.id);
    this.store.dispatch({
      type: Actions.ADD_TO_BASKET,
      payload: {
        product,
        quantity
      }
    });
  }

  deleteProduct(product) {
    console.log('Removing from Basket - ', product);
    this.store.dispatch({
      type: Actions.DELETE_FROM_BASKET,
      payload: product
    });
  }
}
