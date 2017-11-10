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
  private ingredients: Ingredients[]= [];


  constructor(private http: Http) { }

  getIngredientlist() {
    console.log(this.ingredients);
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

  getRecipyByIngredient(ingredient: string) {

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
      });

  }

}
