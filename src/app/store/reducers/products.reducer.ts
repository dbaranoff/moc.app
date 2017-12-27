import * as fromProducts from '../actions/products.actions';
import { Product } from '../../models/product.model';

export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromProducts.ProductsAction
): ProductState {

  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromProducts.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
  }

  return state;
}

export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
export const getProducts = (state: ProductState) => state.data;


