import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  products: Product[];
  basket: Observable<Product[]>;
  site_title = 'Pretty Shop!';


  constructor(
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.store.select(fromStore.getAllProducts)
      .subscribe(state => console.log(state));
  }
}