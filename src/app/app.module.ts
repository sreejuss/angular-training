import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { BootstrapLearningComponent } from './bootstrap-learning/bootstrap-learning.component';



@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,AppRoutingModule,HttpClientModule],
  declarations: [AppComponent, RegistrationComponent, LoginComponent,RxjsLearningComponent,BootstrapLearningComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
