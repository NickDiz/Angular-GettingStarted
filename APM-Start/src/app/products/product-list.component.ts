import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    imageWidth : number = 50; 
    imageMargin : number = 2; 
    pageTitle : string = "Product List!!";
    products : IProduct[] = [];
    showImage: boolean = false; 

    errorMessage: any;

    private _listFilter: string = "";
    private _productService: ProductService;
    

    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value; 
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    onRatingClicked(message : string) : void {
        this.pageTitle = 'Product List: ' +  message; 
    }
    
    filteredProducts: IProduct[]

    toggleImage() : void {
        this.showImage = !this.showImage; 
    }

    performFilter(listFilter: string): IProduct[] { 
        const filterBy = listFilter.toLocaleLowerCase(); 

        return this.products.filter(x => x.productName.toLocaleLowerCase().indexOf(filterBy) > -1);  
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
          next: products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err
        });
      }

    constructor(private productService : ProductService){
    }
}
