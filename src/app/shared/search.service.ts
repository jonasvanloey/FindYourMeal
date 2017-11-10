import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Ingredients} from './ingredients.model';

import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import 'rxjs';


import {Recipes} from './recipes.model';

@Injectable()
export class SearchService {
  ingredientschanged = new Subject<Ingredients[]>();
  recipeschanged= new Subject<Recipes[]>();
<<<<<<< HEAD
  private ingredients: Ingredients[]= [];
=======

  private ingredients: Ingredients[]=[
  ];
  private recipes: Recipes[]=[

  ];


>>>>>>> c3b877be6edcfa5852406b13624bde923f8f8bc4


  constructor(private http: Http) { }

<<<<<<< HEAD
  getIngredientlist() {
    console.log(this.ingredients);
=======
  getIngredientlist(){
>>>>>>> c3b877be6edcfa5852406b13624bde923f8f8bc4
    return this.ingredients;
  }
  addIngredientToList(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientschanged.next(this.ingredients);
  }
  deleteIngredient(id: number) {
    this.ingredients.splice((id),1);
    this.ingredientschanged.next(this.ingredients);
  }
  getRecipelist(){
    return this.recipes;
  }
  getRecipyByIngredient(ingredient:string): Promise<Recipes>{


  getRecipyByIngredient(ingredient: string) {

<<<<<<< HEAD
    // console.log(this.unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=f
    // alse&ingredients="+ingredient+"&limitLicense=false&number=5&ranking=1")
    //   .header("X-Mashape-Key", "JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE")
    //   .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    //   .end());
    const unirest = require('unirest');
    const requestHandler = require('unirest-request-handler');
    return requestHandler.handle(unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/' +
      'recipes/findByIngredients?fillIngredients=false&ingredients="+ingredient+"&limitLicense=false&number=5&ranking=1')
      .header('X-Mashape-Key', 'JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE'))
      .then(response => response);
    this.unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' +
      'findByIngredients?fillIngredients=false&ingredients="+ingredient+"&limitLicense=false&number=5&ranking=1')
      .header('X-Mashape-Key', "JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE')
      .header('X-Mashape-Host' , "spoonacular-recipe-food-nutrition-v1.p.mashape.com')
      .end(function (result) {
        console.log(result.body);
=======
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
>>>>>>> c3b877be6edcfa5852406b13624bde923f8f8bc4
      });

  }

<<<<<<< HEAD
=======


>>>>>>> c3b877be6edcfa5852406b13624bde923f8f8bc4
}
