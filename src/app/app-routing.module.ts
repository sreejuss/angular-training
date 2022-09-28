import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapLearningComponent } from './bootstrap-learning/bootstrap-learning.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { ScssLearningComponent } from './scss-learning/scss-learning.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"rxjs",component:RxjsLearningComponent},
  {path:"bootstrap",component:BootstrapLearningComponent},
  {path:"flexbox",component:FlexboxComponent},
  {path:"scss",component:ScssLearningComponent},
  {path:"subjects",component:SubjectsComponent},
  {
    path:"products",
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
