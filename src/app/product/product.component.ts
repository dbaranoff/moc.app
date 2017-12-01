import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import {BasketAction} from '../_store/actions/basket.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;
  quantity: number;

  constructor( private basketAction: BasketAction
  ) {}

  ngOnInit() { }

  addToBasket(product) {
    this.basketAction.addProduct(product);
  }
}
