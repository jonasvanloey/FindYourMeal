import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../../shared/ingredients.model";
import {SearchService} from "../../shared/search.service";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients: string;


  ingredientlist: any;
  constructor(private searchservice: SearchService) { }


  ngOnInit() {
    this.searchservice.ingredientschanged.subscribe(
      (ingredients: Ingredients[])=>{
        this.ingredientlist=ingredients;
        console.log(this.ingredientlist);
      }
    );
    this.ingredientlist=this.searchservice.getIngredientlist();


  }
}
