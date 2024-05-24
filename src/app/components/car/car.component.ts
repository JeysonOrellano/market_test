import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];
  showSuccess: boolean = false;
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log("carrito", this.cartItems);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems(); 
    this.showSuccessToast();
  }

  showSuccessToast() {
    this.showSuccess = true;
    setTimeout(() => {
      this.hideSuccessToast();
    }, 5000);
  }
  hideSuccessToast() {
    this.showSuccess = false;
  }
}
