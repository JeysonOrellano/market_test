import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { RegisterComponent } from './components/auth/register/register.component';
import{HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { ProductItemComponent } from './components/home/product-item/product-item.component';
import { ProductComponent } from './components/product/product.component';
import { CarComponent } from './components/car/car.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
