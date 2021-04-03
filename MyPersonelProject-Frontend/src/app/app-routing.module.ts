import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"products",component:ProductComponent, canActivate:[LoginGuard]},
  {path:"iletisim",component:IletisimComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
