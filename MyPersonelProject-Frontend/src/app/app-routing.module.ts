import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"iletisim",component:IletisimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
