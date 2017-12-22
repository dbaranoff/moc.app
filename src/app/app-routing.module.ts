import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './containers/product-list/product-list.component';
import { BasketComponent } from './containers/basket/basket.component';
import {AppComponent} from './containers/app/app.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'app', component: AppComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'basket', component: BasketComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
