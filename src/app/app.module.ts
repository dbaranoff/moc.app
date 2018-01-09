import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { BasketService } from './services/basket.service';

import { AppComponent } from './containers/app/app.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { BasketComponent } from './containers/basket/basket.component';
import { ProductComponent } from './components/product/product.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavComponent } from './components/nav/nav.component';

import { AppRoutingModule } from './app-routing.module';

import { reducers, effects, CustomSerializer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
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
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,

    // TODO: [Production]: Turn this off on Production
    StoreDevtoolsModule.instrument(),
  ],


  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer},
    DataService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

