import { combineReducers, ActionReducer, Action, ActionReducerMap } from '@ngrx/store';

import * as basketReducer from './basket.reducer';
import { IBasketState } from './basket.state';

export interface IAppState {
  basket: IBasketState;
}

export const reducers = {
  basket: basketReducer
};
