import * as fromBasket from '../actions/basket.actions';
import {Product} from '../../models/product.model';

export interface BasketState {
  entities: {[id: number]: number};
  totalQuantity: number;
  totalPrice: number;
  selectedProducts: number[];
}

export const initialState: BasketState = {
  entities: {},
  totalQuantity: 0,
  totalPrice: 0,
  selectedProducts: [],
};

export function reducer(
  state = initialState,
  action: fromBasket.BasketActions): BasketState {

  switch (action.type) {
    case fromBasket.ADD_PRODUCT: {
      const productToAdd = action.payload.productId;
      const quantityToAdd = action.payload.quantity ? action.payload.quantity : 1;
      
      const entities = Object.assign(state.entities, {
      ...state.entities,
        [productToAdd]: quantityToAdd + ((state.entities[productToAdd]) ? state.entities[productToAdd] : 0)
      });
      
      const selectedProducts = [...state.selectedProducts, productToAdd];
      
      return {
        ...state,
        entities,
        selectedProducts,
     };
    }
          
      case fromBasket.REMOVE_PRODUCT: {
        console.log('Removing: ' + action.payload);
      return {
        ...state,
      };
    }
          
      case fromBasket.SET_TOTAL_QUANTITY: {
      return {
        ...state,
        totalQuantity: action.payload
      };
    }
          
      case fromBasket.SET_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: action.payload
      };
    }
      
      case fromBasket.SHOW_BASKET: {
      const selectedProducts = action.payload;
      
      return {
        ...state,
        selectedProducts,
      };
    }
      
  }
  
  return state;
}

export const getBasketEntities = (state: BasketState) => state.entities;
export const getTotalQuantity = (state: BasketState) => state.totalQuantity;
export const getTotalPrice = (state: BasketState) => state.totalPrice;
export const getSelectedProducts = (state: BasketState) => state.selectedProducts;
