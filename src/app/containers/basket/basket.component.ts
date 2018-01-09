import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import * as fromStore from '../../store';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-basket',
//  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})

export class BasketComponent implements OnInit {

  basket$: Observable<Product[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.basket$ = this.store.select(fromStore.getBasketProducts).pipe(
    tap((product: Product = null) => {
        const isProduct = !!(product);
        const basket = (isProduct) ? : [] ;
        this.store.dispatch(new fromStore.);
      })
    );
  }
  
  removeProduct(productId) {
    this.store.dispatch(new fromStore.RemoveProduct(productId));
  }

}
