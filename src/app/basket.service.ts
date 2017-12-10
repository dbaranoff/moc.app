import { AppState } from './common/appstate';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as basket from './common/basket.actions';
import * as basketReducers from './common/basket.reducers';

import { Product } from './product.model';

@Injectable()
export class BasketService {
  
  constructor(
    private store: Store<AppState>
  ) {
    
   }
  
  public getState(): Observable<Product[]> {
    
    return this.store.select('basket');
  }

  add(product: Product) {
    this.store.dispatch(new basket.AddToBasketAction(product));
  }
  
  remove(product: Product) {
    this.store.dispatch(new basket.RemoveFromBasketAction(product));
  }
  
}
