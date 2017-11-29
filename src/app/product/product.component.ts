import { Component, OnInit, Input } from '@angular/core';

import { BasketAction } from '../_store/actions/basket.actions';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;
  quantity: number;

  constructor(
  private bs: BasketAction
  ) {	}

  ngOnInit() { }

  addToBasket(product) {
    this.bs.addProduct(product, this.quantity || 1);
  }
}
