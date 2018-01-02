import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromProducts from './products.reducer';

export interface AppState {
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.reducer,
};

/* Only if the Products module is dedicated feature module with Store.forFeature() */
// export const getProductsState = createFeatureSelector<AppState>(
//   'products'
// );

/* If used Store.forRoot() */
export const theState = (state: AppState) => state;

// products state
export const getProductsState = createSelector(
  theState,
  (state: AppState) => state.products
);

export const getProductsEntities = createSelector(getProductsState, fromProducts.getProductsEntities);

export const getAllProducts = createSelector(
  getProductsEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });
export const getProductsLoaded = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading = createSelector(getProductsState, fromProducts.getProductsLoading);
