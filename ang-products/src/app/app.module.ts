import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductAComponent } from './components/product-a/product-a.component';
import { ProductBComponent } from './components/product-b/product-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAComponent,
    ProductBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
