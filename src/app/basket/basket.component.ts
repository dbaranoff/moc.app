import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../product.model';
import { BasketService } from '../basket.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-basket',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})

export class BasketComponent implements OnInit {

  basket: Product[];

  constructor(
   private basketService: BasketService
  ) {
    
  }

  ngOnInit() {
    this.getState().subscribe(state => this.basket = state['basket']);
    console.log(this.basket);
  }

  getState(): Observable<Product[]> {
    return this.basketService.getState();
  }
  
  removeProduct(product) {
  this.basketService.remove(product);
  }
}
