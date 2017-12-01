import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

data: Product[];
//   data: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.dataService.getProducts()
      .subscribe(data => this.data = data['products']);
  }
}
