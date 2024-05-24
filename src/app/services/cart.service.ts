import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: { product: Product, quantity: number }[] = [];

constructor() { }
addToCart(product: Product, quantity: number) {
    this.cartItems.push({ product, quantity });
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

}
