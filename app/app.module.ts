import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './app.component.login';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent, LoginComponent ]
})
export class AppModule { }
