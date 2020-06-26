import { Component } from '@angular/core';
import productList from '../../api/products/products.json'; 

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
    imageWidth : number = 50; 
    imageMargin : number = 2; 
    pageTitle : string = "Product List!!";
    products : any[] = productList; 
    showImage: boolean = false; 
    listFilter: string = "cart"; 
    toggleImage() : void {
        this.showImage = !this.showImage; 
    }; 
}
