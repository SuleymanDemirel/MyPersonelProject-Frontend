import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  email:string;
  users:User[]=[];
  constructor(private authService:AuthService, private toastrService:ToastrService, private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.getUserByMail(this.email);
  
  }

  checkToLogin(){
    if(this.authService.isAuthenticated()){
     
      return true;
      
      
    }else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("expiration")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    this.router.navigate(['login']);
    this.toastrService.info("Çıkış Yapıldı.","")
    
  }


  getUserByMail(email:string){
    

    this.userService.getUserByMail(localStorage.getItem("email")).subscribe(response=>{
      console.log(response.data);
      this.users = response.data;

    })
  }

  route(){
    this.router.navigate(['products']);
  }

  ticketsRoute(){
    this.router.navigate(['tickets']);
  }
 
}
