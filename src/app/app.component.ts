import { Component, OnInit, Output } from '@angular/core';
import {Product} from './product.model';
import { Store } from '@ngrx/store';
import { AppState } from './common/appstate';  
import { Observable } from 'rxjs/Observable';

interface State {
  products: Product[];
  basket: Product[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [];
  basket: Observable<Product[]>;
  site_title = 'Pretty Shop!';

  constructor(
    private store: Store<AppState>
  ) {
  this.basket = this.store.select('basket');
  }

}
