import { Injectable } from '@angular/core';
import * as http from 'http';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class GerechtService {

  unirest =  require('unirest');
  constructor(private https: Http) { }
// JONAS
//   getrecipe(){
//     unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/479101/information?includeNutrition=false")
//       .header("X-Mashape-Key", "JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE")
//       .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
//       .end(function (result) {
//         console.log(result.status, result.headers, result.body);
//       });
//   }

}
