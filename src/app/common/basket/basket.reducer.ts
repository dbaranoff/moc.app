import * as basket from './basket.actions';

import {Product} from '../../product.model';

// export interface State {
//   // basket: Product[];
//
//   /* The description of the different parts of the basket go here */
//
// }

const initialState = {
  products: [],
  basket: []
  /* The initial values of the basket state will be initialized here */

};

/* The reducer of the basket state. Each time an action for the basket is dispatched,
it will create a new state for the basket. */

export function reducer (state = initialState, action: basket.BasketActions) {
  switch (action.type) {
    case basket.BasketActionTypes.GET_STATE: {
      return state;
    }

    case basket.BasketActionTypes.ADD_PRODUCT: {
      return Object.assign({}, state, {
        ...state,
        basket: action.payload
      });
    }

    case basket.BasketActionTypes.REMOVE_PRODUCT: {
      const productToRemove = action.payload;
      return Object.assign({}, state, {
        basket: productToRemove
      });
    }

    default: return state;
  }
}

// export const basketState = (state: State) => state.basket;
