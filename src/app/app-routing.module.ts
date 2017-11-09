import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountSignupComponent} from "./account/account-signup/account-signup.component";
import {AccountLoginComponent} from "./account/account-login/account-login.component";
import {GerechtComponent} from "./gerecht/gerecht.component";



const appRoutes: Routes = [
  {path: 'SignUp',component:AccountSignupComponent },
  {path: 'SignIn',component:AccountLoginComponent },

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
