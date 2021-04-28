import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  checkToLogin(){
    if(this.authService.isAuthenticated()){
     
      return true;
    }else{
      return false;
    }
  }

  logout(){

    localStorage.info("Çıkış yapılıyor..","")
    localStorage.delete("token")
    localStorage.delete("expiration")
    localStorage.delete("email")
    localStorage.delete("password")
    localStorage.navigate(['login']);

  }


}
