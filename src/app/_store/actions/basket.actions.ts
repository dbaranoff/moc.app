import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './basket.state';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../product.model';

@Injectable()
export class BasketAction {

  private basket: Observable<Product[]>;

  constructor(
    private store: Store<IAppState>
  ) {
    this.basket = this.store.select('basket');
  }

  getCount() {
    this.store.select('basket').dispatch({type: 'GET_COUNT'});
  }

  getState() {
    this.store.select('basket').dispatch({type: 'GET_STATE'});
  }

  addProduct(product: Product) {
    this.store.select('basket').dispatch({type: 'ADD_PRODUCT', payload: product});
  }

  removeProduct(product: Product) {
    this.store.select('basket').dispatch({type: 'REMOVE_PRODUCT', payload: product});
  }

  resetBasket() {
    this.store.select('basket').dispatch({type: 'RESET_BASKET'});
  }
}
