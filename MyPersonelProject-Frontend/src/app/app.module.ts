import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './components/product/product.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import {ToastrModule} from "ngx-toastr";
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanelComponent } from './components/panel/panel.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { UserComponent } from './components/user/user.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { TicketComponent } from './components/ticket/ticket.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProductComponent,
    IletisimComponent,
    LoginComponent,
    RegisterComponent,
    PanelComponent,
    LogOutComponent,
    FooterComponent,
    CategoryComponent,
    UserComponent,
    FilterProductsPipe,
    FilterPipePipe,
    TicketComponent,
    ProductDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
