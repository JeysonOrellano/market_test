import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit ,OnDestroy {

  products:Product[] = [];
  productSub:Subscription | undefined 
  constructor(private productService:ProductService){
    }
  ngOnInit(): void {
  this.productSub= this.productService.getProducts()
     .subscribe({
      next:(data:Product[])=>{
          this.products = data;
          console.log("data👌👌",this.products);
          
      },
      error:(err)=>{
        console.log("error",err);
      }
     })
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
