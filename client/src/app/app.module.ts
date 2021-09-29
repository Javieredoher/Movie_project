import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { AddComponent } from './COMPONENTS/add/add.component';
import { ModifyComponent } from './COMPONENTS/modify/modify.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
