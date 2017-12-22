import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromProducts from './products.reducer';

export interface AppState {
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.reducer,
};

export const getProductsState = createFeatureSelector<AppState>(
  'products'
);

// products state
export const getState = createSelector(
  getProductsState,
  (state: AppState) => state.products
);

export const getAllProducts = createSelector(getState, fromProducts.getProducts);
export const getProductsLoaded = createSelector(getState, fromProducts.getProductsLoaded);
export const getProductsLoading = createSelector(getState, fromProducts.getProductsLoading);
