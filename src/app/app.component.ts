import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {Product} from './product.model';
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

  products: Observable<Product[]>;
  basket: Observable<Product[]>;
  site_title = 'Pretty Shop!';


  constructor(
  ) {}


}
