import { Action } from '@ngrx/store';

export const ADD_TO_BASKET = 'Add product to Basket';
export const DELETE_FROM_BASKET = 'Delete product from Basket';

export class AddProductAction implements Action {
  readonly type = ADD_TO_BASKET;
}
export class DeleteProductAction implements Action {
  readonly type = DELETE_FROM_BASKET;

  constructor(public payload: Product[]) {}
} 