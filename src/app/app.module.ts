import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {CrSelectComponent} from "./cr-select/cr-select.component";
import {Select2Component } from 'angular-select2-component';
// import { CrSelectComponent } from './cr-select/cr-select.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CrSelectComponent,
    Select2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
