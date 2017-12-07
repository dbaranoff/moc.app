import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {Product} from './product.model';

import * as fromRoot from './common/index';
import * as layout from './common/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];
  site_title = 'Pretty Shop!';

  constructor( private store: Store<fromRoot.AppState>

  ) {}

}
