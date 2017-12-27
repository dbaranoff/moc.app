import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import {of} from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as productsActions from '../actions/products.actions';
import * as fromServices from '../../services';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private dataService: fromServices.DataService
  ) {}

  @Effect()

  loadProducts$ = this.actions$.ofType(productsActions.LOAD_PRODUCTS)
    .pipe(
      switchMap(() => {
        return this.dataService.getProducts().pipe(
          map(data => new productsActions.LoadProductsSuccess(data['products'])),
          catchError(error => of(new productsActions.LoadProductsFail(error)))
        );
      })
    );
}

