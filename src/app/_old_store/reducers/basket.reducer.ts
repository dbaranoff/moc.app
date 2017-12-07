import { Action } from '@ngrx/store';
import { Actions } from '../actions/basket.actions';
import { Product } from '../../product.model';
import {Observable} from 'rxjs/Observable';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_STATE:  {
      return state;
    }
    case Actions.ADD_TO_BASKET: {
      console.log(state, action);
      const addProduct = Object.assign({}, action.payload.product);
      addProduct.quantity = action.payload.quantity;
      addProduct.price = (parseInt(addProduct.price, 10) * parseInt(addProduct.quantity, 10)).toFixed(2);
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
      console.log(state, action);
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
