import { Component, OnInit } from '@angular/core';

import {SearchBoxService} from '../search-box.service';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  ingredients: any;
  constructor(private searchBox: SearchBoxService) { }

  ngOnInit() {
  }
  findIngredient(searchTerm: HTMLInputElement) {
    // console.log(`User entered: ${searchTerm.value}`);
    this.searchBox.fetchFindIngredient(searchTerm.value)
      .subscribe(
        // data => this.ingredients.push(data),
        // (error) => console.log(error)
        (data: any[]) => this.ingredients = data,
        (error) => console.log(error)
      );
      }



}
