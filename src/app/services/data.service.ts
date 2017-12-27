import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable()
export class DataService {
  private dataUrl = 'https://shop.bremont.com/products.json';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
