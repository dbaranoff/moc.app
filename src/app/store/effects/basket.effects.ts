import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, catchError, map } from 'rxjs/operators';

import * as productActions from '../actions/products.actions';
import * as basketActions from '../actions/basket.actions';

@Injectable()
export class BasketEffects {
  
  constructor( private action$: Actions ) {}
 
  
// @Effect()
//  addedProduct$ = this.action$.ofType(basketActions.ADD_PRODUCT).pipe(
//  switchMap(() => {
//  return new basketActions.SET_TOTAL_QUANTITY
//  }));
  }
