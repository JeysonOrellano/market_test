import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,OnDestroy {

  slug: string | undefined;
  products:Product| undefined;
  productSub:Subscription | undefined;
  counter: number = 1;
  cartItems: { product: Product, quantity: number }[] = [];
  showSuccess: boolean = false;

  constructor( private router:ActivatedRoute,private productService:ProductService,private cartService:CartService){

  }
  ngOnInit() {
    console.log(this.router);
   this.slug= this.router.snapshot.params['id'] 
   this.productSub = this.productService.getProducts()
    .subscribe(
      {
        next: (data:Product[]) => {
          this.products = data.filter(p=>p.slug === this.slug)[0];
          console.log("aqui",this.products);
        },
        error: (error:any) => {
          console.log(error);
        },
      })
  }
  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }
  addToCart(){
    if (this.products) {
      this.cartService.addToCart(this.products, this.counter);
      console.log("se agrego");
      this.showSuccessToast();
    } else {
      console.error('No se puede agregar al carrito porque el producto no está definido.');
    }
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

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

}
