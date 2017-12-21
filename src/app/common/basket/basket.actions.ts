import {Action} from '@ngrx/store';
import {Product} from '../../product.model';

/* Basket actions are defined here */

export const BasketActionTypes = {
  GET_STATE: '[Basket] Get Basket State',
  ADD_PRODUCT: '[Basket] Add Product To Basket',
  REMOVE_PRODUCT: '[Basket] Remove Product From Basket'
};

export class GetStateBasketAction implements Action {
  type = BasketActionTypes.GET_STATE;

  constructor (public payload: null) {}
}

export class AddToBasketAction implements Action {
  type = BasketActionTypes.ADD_PRODUCT;

  constructor (public payload: Product) {}
}

export class RemoveFromBasketAction implements Action {
  type = BasketActionTypes.REMOVE_PRODUCT;

  constructor(public payload: Product) {}
}

/* The action classes will be added here once they are defined */

export type BasketActions = GetStateBasketAction | AddToBasketAction | RemoveFromBasketAction;

