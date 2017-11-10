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
  recipeschanged = new Subject<Recipes[]>();
  private ingredients: Ingredients[] = [];
  private recipes: Recipes [] = [
    new Recipes(1, 'title', ' foto', '.jpeg', 1, 0, 12)
  ];
  unirest = require('unirest');

  constructor(private http: Http) {
  }

  getIngredientlist() {
    console.log(this.ingredients);
    return this.ingredients;
  }

  addIngredientToList(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientschanged.next(this.ingredients);
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(( id), 1);
    this.ingredientschanged.next(this.ingredients);
  }

  getRecipyByIngredient (ingredient: string) {
    this.unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=' +
      'false&ingredients=' + ingredient + '&limitLicense=false&number=5&ranking=1')
      .header('X-Mashape-Key', 'JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE')
      .header('X-Mashape-Host', 'spoonacular-recipe-food-nutrition-v1.p.mashape.com')
      .header.append('Access-Control-Allow-Credentials', 'true')
      .header.append('Access-Control-Allow-Methods', 'GET')
      .header.append('Access-Control-Allow-Origin', '*')
      .end(function (result) {
        console.log(result);
      });

  }

}
