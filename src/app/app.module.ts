import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { BasketService } from './services/basket.service';

import { AppComponent } from './containers/app/app.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { BasketComponent } from './containers/basket/basket.component';
import { ProductComponent } from './components/product/product.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavComponent } from './components/nav/nav.component';

import { AppRoutingModule } from './app-routing.module';

import { reducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    BasketComponent,
    SliderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
  ],


  providers: [
    DataService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
