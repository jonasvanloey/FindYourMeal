import { Component, OnInit } from '@angular/core';
import {SearchService} from "../shared/search.service";
import {Ingredients} from "../shared/ingredients.model";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor() { }


  ngOnInit() {

  }

}
