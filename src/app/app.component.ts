import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {SearchService} from './shared/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })
export class AppComponent implements OnInit {
  gerechtlist: any;
  visible = true;

  constructor(private searchservice: SearchService) {
  }

  ngOnInit() {
  // firebase.initializeApp({
  //   apiKey: "AIzaSyD3fnwS561PI6oc6P-uzEx8WsM5Nx7mrXg",
  //   authDomain: "findyourmeal-acb2b.firebaseapp.com"
  // });
    this.gerechtlist = this.searchservice.getRecipeDetailList();
    if (this.gerechtlist) {
      this.visible = true;
    }
  }
}
