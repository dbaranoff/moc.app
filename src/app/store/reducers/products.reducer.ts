import * as fromProducts from '../actions/products.actions';
import { Product } from '../../models/product.model';

export interface ProductState {
  entities: { [id: number]: Product };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  entities: {},
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
      const products = action.payload;

      const entities = products.reduce((pieces: {[id: number]: Product}, product: Product) => {
        return {
          ...pieces,
          [product.id]: product
        };
      }, {
        ...state.entities
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
  }

  return state;
}

export const getProductsEntities = (state: ProductState) => state.entities;
export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;


