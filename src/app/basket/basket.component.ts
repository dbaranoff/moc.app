import { Component, OnInit } from '@angular/core';
import { BasketAction } from '../_store/actions/basket.actions';
import { BasketService } from '../basket.service';

import { Product } from '../product.model';


@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css'],
    providers: [ BasketService ]

})


export class BasketComponent implements OnInit {

  public items: Product[];
  public total: number;

    constructor(private ba: BasketAction, bs: BasketService) { }

    ngOnInit() {
      this.ba.getState();
    }

    remove(product) {
      this.ba.deleteProduct(product);
    }
}
