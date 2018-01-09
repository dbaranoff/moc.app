import { Action } from '@ngrx/store';
import {Product} from '../../models/product.model';

export const ADD_PRODUCT = '[Basket] Add product to basket';
export const REMOVE_PRODUCT = '[Basket] Remove product from basket';
export const SET_TOTAL_QUANTITY = '[Basket] Calculate total basket quantity';
export const SET_TOTAL_PRICE = '[Basket] Calculate total basket price';
export const SHOW_BASKET = '[Basket] Show basket products';


export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: {productId: number, quantity?: number}) {}
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(public payload: number) {}
}

export class SetQuantity implements Action {
  readonly type = SET_TOTAL_QUANTITY;
  constructor(public payload: number) {}
}

export class SetPrice implements Action {
  readonly type = SET_TOTAL_PRICE;
  constructor(public payload: number) {}
}

export class ShowBasket implements Action {
  readonly type = SHOW_BASKET;
  constructor(public payload: number[]) {}
}

export type BasketActions = AddProduct | RemoveProduct | SetQuantity | SetPrice | ShowBasket;
