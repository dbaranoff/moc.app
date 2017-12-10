import {Product} from '../product.model';
import {Action, ActionReducer} from '@ngrx/store';
import {AppState} from './appstate';
import * as basket from './basket.actions';

const initialState = {
  basket: []
};

export function basketReducer(state: AppState = initialState, action: basket.Actions): AppState {
  switch (action.type) {
    case basket.GET_BASKET: {
      return state;
    }
    case basket.ADD_TO_BASKET: {
      const productToAdd = action.payload;
      console.log(state);
      return Object.assign({}, state, {basket: [...state.basket, productToAdd]});
    }
    case basket.REMOVE_FROM_BASKET: {
      const productToRemove = action.payload;
      return Object.assign({}, state, {basket: state.basket.filter(product => product.id !== productToRemove.id)});
    }
  }
}

export const getBasketState = (state: AppState) => state.basket;
