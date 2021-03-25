import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsDetail:ProductDetails[]=[];

  constructor( private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductsDetails()
  }

  getProductsDetails(){
    this.productService.getProductsDetails().subscribe(response=>{
      this.productsDetail = response.data
    })
  }
}
