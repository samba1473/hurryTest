import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ThirdScreenComponent } from './third-screen/third-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    SecondScreenComponent,
    ThirdScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
