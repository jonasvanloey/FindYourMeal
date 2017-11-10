import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../../shared/ingredients.model";
import {SearchService} from "../../shared/search.service";
import {removeSuffix} from "@angular/language-service/src/utils";

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
        for(var i=0;i<this.ingredientlist.length;i++){
          if(i!=0){
            this.ingredients +='%2C'+this.ingredientlist[i].ingredient;
          }
          else{
            this.ingredients =this.ingredientlist[i].ingredient;
          }
          console.log(this.ingredients);

        }
        if(this.ingredientlist.length != 0){
          this.searchservice.getRecipyByIngredient(this.ingredients);
        }
        else{
          this.searchservice.emptyarray();
        }






      }
    );
    this.ingredientlist=this.searchservice.getIngredientlist();
  }

}
