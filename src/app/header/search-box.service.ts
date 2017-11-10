import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchBoxService {
  unirest = require('unirest');

  constructor(private http: Http) { }
  getRecipyByIngredient(ingredients: string) {
    this.unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngre' +
      'dients=false&ingredients="+ingredients+"&limitLicense=false&number=5&ranking=1')
      .header('X-Mashape-Key', 'JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE')
      .header('X-Mashape-Host', 'spoonacular-recipe-food-nutrition-v1.p.mashape.com')
      .header.append('Access-Control-Allow-Credentials', 'true')
      .header.append('Access-Control-Allow-Methods', 'GET')
      .header.append('Access-Control-Allow-Origin', '*')
      .end(function (result) {
        console.log(result);
      });

  }
// weet ge w
}


