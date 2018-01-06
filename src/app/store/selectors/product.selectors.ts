import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

import {Product} from '../../models/product.model';

export const getProductsEntities = createSelector(
  fromReducers.getProductsState,
  fromProducts.getProductsEntities
);

export const getAllProducts = createSelector(
  getProductsEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });
export const getProductsLoaded = createSelector(
  fromReducers.getProductsState,
  fromProducts.getProductsLoaded
);

export const getProductsLoading = createSelector(
  fromReducers.getProductsState,
  fromProducts.getProductsLoading
);

export const getSelectedProduct = createSelector(
  getProductsEntities,
  fromReducers.getRouterState,
  (entities, router): Product => {

    return router.state && entities[router.state.params.productId];
  }
);
