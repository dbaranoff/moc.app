import { Action } from '@ngrx/store';
import {Product} from '../../models/product.model';

// Load Products
export const LOAD_PRODUCTS = '[Products] Setting the Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Setting the Products Failed';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Setting the Products Successed';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

// action types
export type ProductsAction = LoadProducts | LoadProductsFail | LoadProductsSuccess;
