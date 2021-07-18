import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  email:string; 
  users:User[];
  frm:FormGroup
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
      this.getUserByMailDetails(this.email)
      
    }
  
  getUserByMailDetails(email:string){
    this.email = localStorage.getItem("email")
    
    this.userService.getUserByMail(this.email).subscribe(response=>{
    
      this.users = response.data

    })
  }


}
