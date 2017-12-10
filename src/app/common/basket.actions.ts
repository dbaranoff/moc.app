import { Product } from '../product.model';
import { Action } from '@ngrx/store';


export const GET_BASKET = 'GET_BASKET';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export class GetStateAction implements Action {
  readonly type = GET_BASKET;
}

export class AddToBasketAction implements Action {
  readonly type = ADD_TO_BASKET;
  constructor(public payload: Product) {}
}

export class RemoveFromBasketAction implements Action {
  readonly type = REMOVE_FROM_BASKET;
  constructor(public payload: Product) {}
}


export type Actions
  = GetStateAction
  | AddToBasketAction
  | RemoveFromBasketAction;
