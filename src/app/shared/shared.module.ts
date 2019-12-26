import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCartService } from './service/product-cart.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ProductService } from './service/product.service';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [ProductCartService, HttpClient, ApiService, ProductService],
  bootstrap: [],
  exports: [MatToolbarModule, MatIconModule, MatCardModule, MatTableModule, MatButtonModule, AppRoutingModule, BrowserModule, RouterModule, ToastrModule, HeaderComponent, FooterComponent]
})
export class SharedModule { }