import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { Product } from '../product.model';
import { BasketAction } from '../_store/actions/basket.actions';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BasketComponent implements OnInit {

  public basket: Product[];

    constructor(
      private ba: BasketAction,
    ) { }

    ngOnInit() {
      this.getState();
    }

  getState() {
      this.ba.getState();
    }
}
