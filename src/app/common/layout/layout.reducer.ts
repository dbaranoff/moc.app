import * as layout from './layout.actions';

export interface State {
  openBasketName: string;

  /* The description of the different parts of the layout go here */

}

const initialState: State = {
  openBasketName: null
  /* The initial values of the layout state will be initialized here */

};

/* The reducer of the layout state. Each time an action for the layout is dispatched,
it will create a new state for the layout. */

export function reducer (state = initialState, action: layout.LayoutActions): State {
  switch (action.type) {
    case layout.LayoutActionTypes.OPEN_BASKET: {
      const name = action.payload;
      return Object.assign({}, state, {
        openedBasketName: name
      });
    }

    case layout.LayoutActionTypes.CLOSE_BASKET: {
      return Object.assign({}, state, {
        openedBasketName: null
      });
    }

    default: return state;
  }
}

export const getOpenedBasketName = (state: State) => state.openBasketName;
