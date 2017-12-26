import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private basketService: BasketService
  ) {}

  ngOnInit() { }

  addProduct(product) {
    console.log('I want to add the ' + this.product);
  }
}
