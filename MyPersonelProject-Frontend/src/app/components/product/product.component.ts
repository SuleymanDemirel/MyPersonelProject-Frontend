import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/models/product';
import { ProductImage } from 'src/app/models/productImage';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  filterText="";
  productsDetail:ProductDetails[]=[];
  productImages: ProductImage[] = [];

   path : string = "https://localhost:44358/Images/";
   
  constructor( private productService:ProductService, private activatedRoute:ActivatedRoute,
    private productImageService:ProductImageService) { }
  
  ngOnInit(): void {
    this.getProductsDetails()
    this.getAllProductImages()
  }

  getProductsDetails(){
    this.productService.getProductsDetails().subscribe(response=>{
      this.productsDetail = response.data
    })
  }

 getAllProductImages(){
   this.productImageService.getAllProductImages().subscribe(response=>{
     this.productImages = response.data
   })
 }
}
