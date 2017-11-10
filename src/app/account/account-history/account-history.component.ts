import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.css']
})
export class AccountHistoryComponent implements OnInit {
title:string;
  constructor(private authservice: AuthService) { }

  ngOnInit() {

      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('favorites/' + userId).once('value').then(function(snapshot) {
        this.title=snapshot.val().title;

      });
    console.log(this.title);




}
}
