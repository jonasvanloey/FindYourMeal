import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Ingredients} from './ingredients.model';

import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import 'rxjs';
import {Recipes} from "./recipes.model";



import {Gerecht} from './gerecht.model';

@Injectable()
export class SearchService {
  ingredientschanged = new Subject<Ingredients[]>();
  recipeschanged= new Subject<Recipes[]>();
gerechtchanged =  new Subject<Gerecht[]>();
  private ingredients: Ingredients[]= [];
private gerecht: Gerecht[] = [];

  private recipes: Recipes[]= [];



  constructor(private http: Http) { }

  constructor(private http: Http) { }

  getIngredientlist() {



    return this.ingredients;
  }
  addIngredientToList(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientschanged.next(this.ingredients);
  }
  deleteIngredient(id: number) {
    this.ingredients.splice((id), 1 );
    this.ingredientschanged.next(this.ingredients);
  }
  getRecipelist() {
    return this.recipes;
  }

  getRecipeDetailList() {
    return this.gerecht;
  }
  getRecipeId(id: number) {
   return this.ingredients[id];
  }

  getRecipeByIdInfo(id: number): Promise<Gerecht> {

    if(this.gerecht.length===0)
    {
    const unirest = require('unirest');
   const requestHandler = require('unirest-request-handler');
   return requestHandler.handle(unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information?includeNutrition=false')
    .header('X-Mashape-Key', 'JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE')
    .header('X-Mashape-Host' , 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'))
    .then(response => {
      this.gerecht.push(response);
      console.log(this.gerecht);
    });
    }
    else{
      this.gerecht.length=0;
      this.getRecipeByIdInfo(id);
    }
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

  //Firebase
  storefavorite(favorite:any[]){
    return this.http.post('https://findyourmeal-acb2b.firebaseio.com/data.json',favorite);
  }

}
