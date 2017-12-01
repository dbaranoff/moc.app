import { Component, OnInit, Output } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];
  site_title = 'Pretty Shop!';

  constructor(

  ) {}

}
