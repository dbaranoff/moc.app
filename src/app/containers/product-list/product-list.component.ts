import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

// import { DataService } from '../../services/data.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    // private dataService: DataService,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.products$ =  this.store.select(fromStore.getAllProducts);
  }

  addProduct(productId: number) {
    console.log('Adding product with ID:' , productId);
  }
}
