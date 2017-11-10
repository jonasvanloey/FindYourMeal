import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountSignupComponent} from './account/account-signup/account-signup.component';
import {AccountLoginComponent} from './account/account-login/account-login.component';
import {GerechtComponent} from './gerecht/gerecht.component';
import {GerechtDetailComponent} from './gerecht/gerecht-detail/gerecht-detail.component';
import {AccountComponent} from "./account/account.component";



const appRoutes: Routes = [

  {path: 'LogIn' , component: AccountComponent, children:[
    {path: 'SignUp' , component: AccountSignupComponent },
    {path: 'SignIn' , component: AccountLoginComponent },
  ] },
  {path: ':id', component: GerechtDetailComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
