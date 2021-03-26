import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './components/product/product.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProductComponent,
    IletisimComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
