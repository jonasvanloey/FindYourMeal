import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(http: Http) { this.http = http; }


  ngOnInit() {
  }



  findIngredient(searchTerm: HTMLInputElement) {
    console.log(`User entered: ${searchTerm.value}`);
  }
}
