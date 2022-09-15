import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,AppRoutingModule],
  declarations: [AppComponent, RegistrationComponent, LoginComponent,],
  bootstrap: [AppComponent],
})
export class AppModule {}
