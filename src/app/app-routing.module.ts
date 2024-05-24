import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {
  path: '',
  component:HomeComponent,
  },
  
  {
    path: 'signin',
    component:SigninComponent
  },
  {
    path: 'car',
    component:CarComponent
  },
  {
    path: 'product/:id',
    component:ProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
