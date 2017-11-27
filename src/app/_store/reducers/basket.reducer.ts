import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/basket.actions';
import { BasketState } from './basket.state';

import { Product } from '../../product.model';

export const initialState: BasketState = { items: []};

export function reducer(state = initialState, action: fromActions.All): BasketState {
  switch(action.type) {
    case fromActions.ADD_TO_BASKET: {
      return {items: this.payload};
    }
    case fromActions.DELETE_FROM_BASKET: {
      return {items: this.payload};

    }
    default: {
      return state;
    }
  }
}

export const getBasketState = createFeatureSelector<BasketState>('basket');

export const getBasket = createSelector(
  getBasketState,
  (state: BasketState) => state.items
);
