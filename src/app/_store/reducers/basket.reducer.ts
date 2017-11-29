import { Action } from '@ngrx/store';
import { Actions } from '../actions/basket.actions';
import { Product } from '../../product.model';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TO_BASKET: {
      const addProduct = Object.assign({}, action.payload.product);
      addProduct.quantity = action.payload.quantity;
      addProduct.price = (parseInt(addProduct.price) * parseInt(addProduct.quantity)).toFixed(2);
      return {
        ...state,
        items: [
          ...state.items,
          addProduct
        ]
      };
    }
    case Actions.DELETE_FROM_BASKET: {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      };
    }
    default: return state;
  }
};
