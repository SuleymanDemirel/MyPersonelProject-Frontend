import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetails } from 'src/app/models/product';
import { ProductImage } from 'src/app/models/productImage';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductService } from 'src/app/services/product.service';
import { TicketService } from 'src/app/services/ticket.service';
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
  ticketBuyForm:FormGroup

   path : string = "https://localhost:44358/Images/";
   
  constructor( private productService:ProductService, private activatedRoute:ActivatedRoute,
    private productImageService:ProductImageService, private formBuilder:FormBuilder,private ticketService:TicketService,private toastrService:ToastrService) { }
  
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




 createTicketBuyForm(){
  this.ticketBuyForm = this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required],
    firstName:["",Validators.required],
    lastName:["",Validators.required]


  })
}

ticketBuy(){
  if(this.ticketBuyForm.valid){
    let ticketBuyModel = Object.assign({},this.ticketBuyForm.value)

    this.ticketService.add(ticketBuyModel).subscribe(response=>{
      this.toastrService.success("Kayıt Başarılı.","Başarılı")
     
    }, responseError=>{
      this.toastrService.error(responseError.error)
    })
  }
}


 
}
