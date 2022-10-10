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
import { GameComponent } from './game/game.component';
import { FormComponent } from './form/form.component';
import {CalendarModule} from 'primeng/calendar';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,AppRoutingModule,HttpClientModule,CalendarModule,AngularMultiSelectModule],
  declarations: [AppComponent, RegistrationComponent, LoginComponent,RxjsLearningComponent,BootstrapLearningComponent,HeaderComponent,FlexboxComponent,ScssLearningComponent,SubjectsComponent,GameComponent,FormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
