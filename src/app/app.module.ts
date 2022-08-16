import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from './components/layout/layout.module';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductComponent } from './components/pages/products/product/product.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ProductsComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
