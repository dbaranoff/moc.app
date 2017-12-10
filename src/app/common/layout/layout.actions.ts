import {Action} from '@ngrx/store';

/* Layout actions are defined here */

export const LayoutActionTypes = {
  OPEN_BASKET: '[Basket] Open Basket',
  CLOSE_BASKET: '[Basket] Close Basket'
};

export class OpenBasketAction implements Action {
  type = LayoutActionTypes.OPEN_BASKET;

  constructor (public payload: string) {}
}

export class CloseBasketAction implements Action {
  type = LayoutActionTypes.CLOSE_BASKET;

  constructor(public payload: string) {}
}

/* The action classes will be added here once they are defined */

export type LayoutActions = CloseBasketAction | OpenBasketAction;

