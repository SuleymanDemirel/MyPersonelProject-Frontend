import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { UserComponent } from './components/user/user.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"products",component:ProductComponent, canActivate:[LoginGuard]},
  {path:"iletisim",component:IletisimComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"panel", component:PanelComponent},
  {path:"users", component:UserComponent},
  {path:"tickets", component:TicketComponent},
  {path:"products/products/productdetails/:id",component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
