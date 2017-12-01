import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../reducers';

import { Product } from '../../product.model';

export const Actions = {
  GET_STATE: 'GET_STATE',
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  DELETE_FROM_BASKET: 'DELETE_FROM_BASKET'
};

@Injectable()
export class BasketAction  {

  constructor(private store: Store<IAppState>) { }

  getState(): Observable<any> {
    console.log(this.store.select('state'));
        return this.store.select('state');
    }

  addProduct(product: Product, quantity: number) {
    // console.log('Add to Basket - ', product.id);
    // console.log(Actions);
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
