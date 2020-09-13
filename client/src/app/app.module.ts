import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppComponent } from './app.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateProductComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
