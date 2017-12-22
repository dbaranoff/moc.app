import * as fromProducts from '../actions/products.actions';
import { Product } from '../../models/product.model';

export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [
    {
      'id': 2204678213,
      'title': 'Cobham Coat Wallet',
      'handle': 'cobham-coat-wallet',
      'body_html': 'Bremont’s Cobham Coat Wallet includes eight credit card compartments,' +
      ' two full length pockets for ample note storage and two large sections to stow additional' +
      ' documents. The wallet features blind Bremont logo and propeller embossing and is crafted ' +
      'from deluxe calf and English bridle leather, guaranteeing excellent quality.',
      'published_at': '2017-11-29T14:21:51+00:00',
      'created_at': '2015-09-23T11:59:18+01:00',
      'updated_at': '2017-11-29T14:21:51+00:00',
      'vendor': 'Bremont',
      'product_type': 'Leather Accessories',
      'tags': [
        'for-the-adventurer',
        'for-the-gentleman',
        'for-the-lady',
        'for-the-mariner',
        'leather-accessories',
        'over-150'
      ],
      'variants': [
        {
          'id': 6332349189,
          'title': 'Black',
          'option1': 'Black',
          'option2': null,
          'option3': null,
          'sku': 'BR.600.5037',
          'requires_shipping': true,
          'taxable': true,
          'featured_image': null,
          'available': true,
          'price': '165.00',
          'grams': 200,
          'compare_at_price': null,
          'position': 1,
          'product_id': 2204678213,
          'created_at': '2015-09-23T11:59:18+01:00',
          'updated_at': '2017-11-29T13:23:52+00:00'
        }
      ]
    }
  ],
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
      return {
        ...state,
        // data: [],
        loading: false,
        loaded: true
      };
    }
  }

  return state;
}

export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
export const getProducts = (state: ProductState) => state.data;


