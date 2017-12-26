import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as ProductsActions from '../actions/products.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions) {}


  @Effect()

    // There is the breakpoint....
    // https://www.youtube.com/watch?v=xkUOQeGqIGI&list=PLW2eQOsUPlWJRfWGOi9gZdc3rE4Fke0Wv&index=11
    // time: 09:27

  loadProducts$ = this.actions$.ofType(ProductsActions.LOAD_PRODUCTS);
}

