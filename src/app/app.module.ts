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
import { HeaderComponent } from './header/header.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ScssLearningComponent } from './scss-learning/scss-learning.component';
import { SubjectsComponent } from './subjects/subjects.component';



@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,AppRoutingModule,HttpClientModule],
  declarations: [AppComponent, RegistrationComponent, LoginComponent,RxjsLearningComponent,BootstrapLearningComponent,HeaderComponent,FlexboxComponent,ScssLearningComponent,SubjectsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
