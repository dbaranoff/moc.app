import { Component, OnInit } from '@angular/core';

import { BasketService } from '../basket.service';

import { Product } from '../product.model'


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})


export class BasketComponent implements OnInit {
	
	private items: Product[];
	
  constructor(private bs: BasketService) { }

  ngOnInit() {
  }
	
	add(product: Product) {
//		this.items = this.items.push(product);
	}
	
	confirmMessage() {
		
	}
	
	remove(product) {
		
	}
}
