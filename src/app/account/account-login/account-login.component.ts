import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {

  constructor(private authservice: AuthService) {

  }

  ngOnInit() {
  }
  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signinUser(email,password);

  }
  onLogOut(){
    this.authservice.LogOut();
  }

}
