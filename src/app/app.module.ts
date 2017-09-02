import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { UserComponent } from './user/user.component'
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule , routing],
  declarations: [ AppComponent , UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }