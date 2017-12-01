import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { Product } from '../product.model';
import { BasketAction } from '../_store/actions/basket.actions';
import { Store } from '@ngrx/store';
import {IAppState} from '../_store/actions/basket.state';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BasketComponent implements OnInit {

  basket: Store<Product[]>;

    constructor(
      private store: Store<IAppState>,
      private ba: BasketAction
    ) {
      this.basket = this.store.select('basket');
    }

    ngOnInit() {
      this.getState();
      console.log('basket', this.basket);
    }

    getState() {
      this.ba.getState();
    }
}
