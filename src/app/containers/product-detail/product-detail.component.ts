import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {Observable} from 'rxjs/Observable';

import * as fromStore from '../../store';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  template: '<app-product [product]="product$ | async"></app-product>'})

export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.product$ = this.store.select(fromStore.getSelectedProduct);
  }
}

// 6332349189
