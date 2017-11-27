import { Component, OnInit, Input } from '@angular/core';

import { BasketService } from '../basket.service';

import {ADD_TO_BASKET, AddProductAction} from '../_store/actions/basket.actions';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private bs: BasketService,
    private basketStore: AddProductAction
  ) {	}

  ngOnInit() { }

  addToBasket(product) {
     // this.basketStore.type('ADD_TO_BASKET');
  }
}
