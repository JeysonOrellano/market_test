import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: { product: Product}[] = [];
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

}
