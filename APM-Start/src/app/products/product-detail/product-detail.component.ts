import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

import { IProduct } from '../products'; 
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product Detail'
  product : IProduct
  errorMessage: any;

  constructor(private route : ActivatedRoute,
     private router : Router,
     private productService : ProductService ) { }

  onBack() : void {
    this.router.navigate(['./products']); 
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id'); 
    this.pageTitle += ` ${id}`;  

    this.productService.getProducts().subscribe({
      next: products => {
        this.product = products.find(x => x.productId == id);
      },
      error: err => this.errorMessage = err
    });
  }

}
