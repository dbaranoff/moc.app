import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromBasket from '../reducers/basket.reducer';
import * as fromProducts from './product.selectors';

import {Product} from '../../models/product.model';
import { deepEqual } from 'assert';

export const getBasketEntities = createSelector(
  fromReducers.getBasketState,
  fromBasket.getBasketEntities
);

export const getAllBasket = createSelector(
  getBasketEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });

export const getBasketQuantity = createSelector(
  fromReducers.getBasketState,
  fromBasket.getTotalQuantity
);

export const getBasketPrice = createSelector(
  fromReducers.getBasketState,
  fromBasket.getTotalPrice
);

export const getBasketProducts = createSelector(
fromProducts.getProductsEntities,
getBasketEntities,
(products, basket): Product[] => {
  
  const basketArr = Object.keys(basket);
  let res;
//  
//  res = products.filter(product => {
//    return basketArr.indexOf(product.id.toString(10)) !== -1;
//  });
//  
//  console.log(res);
  console.log(basketArr);
  res = basketArr.map(id => {
    const intId = parseInt(id, 10);
    console.log(intId);
    console.log(products[intId]);
    return products[intId];
  });
  
  console.log(products);
  console.log(res);
  return res;
});
