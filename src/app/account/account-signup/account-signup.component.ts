import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../auth.service";



@Component({
  selector: 'app-account-signup',
  templateUrl: './account-signup.component.html',
  styleUrls: ['./account-signup.component.css']
})
export class AccountSignupComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signupUser(email,password);

  }
}
