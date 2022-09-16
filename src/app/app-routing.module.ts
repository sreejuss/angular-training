import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"rxjs",component:RxjsLearningComponent},
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
