import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import {ProductService} from './product.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  
  { path: 'product/:id', component: ProductPageComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }