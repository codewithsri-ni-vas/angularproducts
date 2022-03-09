import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductAComponent } from './components/product-a/product-a.component';
import { ProductBComponent } from './components/product-b/product-b.component';
import { ProductCComponent } from './components/product-c/product-c.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAComponent,
    ProductBComponent,
    ProductCComponent,
    ProductsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
