import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetails } from 'src/app/models/product';
import { ProductImage } from 'src/app/models/productImage';
import { User } from 'src/app/models/user';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductService } from 'src/app/services/product.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productsDetail:ProductDetails[]=[];
  productImages: ProductImage[] = [];

  biletAlForm:FormGroup

  email:string;
  users:User[];
  userId:number
  path : string = "https://localhost:44358/Images/";

  
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,
    private productImageService:ProductImageService, private formBuilder:FormBuilder,
    private toastrService:ToastrService, private ticketService:TicketService, private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["id"]) {
        this.getProductsDetailsById(params["id"]);
      }
    
    })

    this.getUserByMailDetails(this.email)
    this.createBiletAlForm();
  }

  getProductsDetailsById(id:number){
    this.productService.getProductsDetailsById(id).subscribe(response=>{
      this.productsDetail = response.data;
    })
  }

  satinAl(){
    this.toastrService.success("Satın alma başarılı");
   
  }

  getUserByMailDetails(email:string){
    this.email = localStorage.getItem("email")
    this.userService.getUserByMail(this.email).subscribe(response=>{
    
      this.users = response.data
    })
  }




  createBiletAlForm(){
    this.biletAlForm=this.formBuilder.group({
    
      userId:["",Validators.required],
      productId:["",Validators.required],
      categoryId:["",Validators.required],
      numberOfTickets:["",Validators.required],

    })
  }

  add(){
    if(this.biletAlForm.valid){
       let biletModel = Object.assign({},this.biletAlForm.value)
       this.ticketService.add(biletModel).subscribe(response=>{

        this.toastrService.success(response.message,"Başarılı!")
       }, responseError=>{
         if(responseError.error.ValidationErrors.length>0){
           for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası");
             
           }
         }
       }) 
    }else{
      this.toastrService.error("Ürün Ekleme başarısız.","Hata!");
    }
    
  }



}

