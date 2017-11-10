import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Ingredients} from './ingredients.model';

import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import 'rxjs';

@Injectable()
export class SearchService {
  ingredientschanged = new Subject<Ingredients[]>();
  recipeschanged= new Subject<Recipes[]>();

  private ingredients: Ingredients[]=[
  ];
  private recipes: Recipes[]=[

  ];




  constructor(private http: Http) { }

  getIngredientlist(){
    return this.ingredients;
  }
  addIngredientToList(ingredient:Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientschanged.next(this.ingredients);
  }
  deleteIngredient(id: number){
    this.ingredients.splice((id),1);
    this.ingredientschanged.next(this.ingredients);
  }
  getRecipelist(){
    return this.recipes;
  }
  getRecipyByIngredient(ingredient:string): Promise<Recipes>{
  console.log(this.recipes.length);
    if(this.recipes.length===0)
    {
      const unirest = require('unirest');
      const requestHandler = require('unirest-request-handler');
      return requestHandler.handle(unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients="+ingredient+"&limitLicense=false&number=5&ranking=1")
        .header("X-Mashape-Key", "JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE")
        .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com"))
        .then(response =>{
          for(const d of response){
            this.recipes.push(d);
          }
          console.log(response);
          console.log(this.recipes);
        });


    }
    else{
      this.recipes.length=0;
      this.getRecipyByIngredient(ingredient);
    }



  }
  emptyarray(){
    this.recipes.length=0;
  }



}
