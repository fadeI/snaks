import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app';
import {RouterModule} from '@angular/router';
import {DropDownlist} from './customControls/dropdownlist';
import {Page1Component} from './page1.component';




@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot([
    {path :'boss' , component : Page1Component},
    {path :'worker' , component : Page1Component}
  ])],
  declarations: [ AppComponent ,DropDownlist,Page1Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
