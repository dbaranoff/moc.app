import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { BasketService } from './basket.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import { SliderComponent } from './slider/slider.component';
import { NavComponent } from './nav/nav.component';

import { AppRoutingModule } from './app-routing.module';
import { basketReducer } from './common/basket.reducers';

// import { BasketAction } from './_store/actions/basket.actions'; // store v3
// import { reducers } from './_store/reducers'; // store v3



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
    StoreModule.forRoot({basket: basketReducer}),
    HttpClientModule,
    AppRoutingModule,

//    StoreModule.forRoot(),
    // StoreModule.forRoot(reducers) // store v3 

  providers: [
    DataService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
