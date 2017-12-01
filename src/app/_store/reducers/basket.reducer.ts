import { IAppState } from '../actions/basket.state';

const initialState: IAppState = {
  basket: []
};

export const basketActions = {
  GET_COUNT: 'GET_COUNT',
  GET_STATE: 'GET_STATE',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  RESET_BASKET: 'RESET_BASKET'
};

export function basketReducer(state: IAppState = initialState, action) {
  switch (action.type) {
    case basketActions.GET_COUNT:
      return state.basket.length;

    case basketActions.GET_STATE:
      console.log('getting state', state);
      return state;

    case basketActions.ADD_PRODUCT:
      const productToAdd = Object.assign({}, action.payload);
      console.log('old state', state, 'adding product ', productToAdd);
      return {
        ...state,
        basket: [
          ...state.basket,
          productToAdd
        ]
      }

    case basketActions.REMOVE_PRODUCT:
      // const index = state((product) => product.id === action.payload.id);
      // console.log(state,action);
      return {
        // ...state,
        // items: [
        //   ...state.items.slice(0, index),
        //   ...state.items.slice(index + 1)
        // ]
      };

    case basketActions.RESET_BASKET:
      return state.basket = initialState.basket;

    default:
      return state;
  }
}
