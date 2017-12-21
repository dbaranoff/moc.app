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

  constructor() {}

  ngOnInit() {}

}
