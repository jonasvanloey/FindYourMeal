import { Component, OnInit } from '@angular/core';

import {SearchBoxService} from '../search-box.service';
// import {rapidapi-connect} from 'rapidapi-connect';
declare let require: any;
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  // RapidAPI =  require('rapidapi-connect');
 //  rapid =  new this.RapidAPI('default-application_59de1668e4b04627fc65947a', '244b9137-3df8-4bbd-a607-0a826529a505');
  ingredients: any;
   invocation = new XMLHttpRequest();
   url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/';
  constructor(private searchBox: SearchBoxService) { }
   unirest = require('unirest');
  ngOnInit() {
    this.findIngredient();
  }
  autoingredient(searchTerm: HTMLInputElement) {
    this.unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?' +
      'intolerances=egg&metaInformation=false&number=10&query=appl')
      .headers({'X-Mashape-Key': 'JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE'})
      .end(function (result) {
        console.log(result);
      });


  }
  findIngredient() {
  this.unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?' +
    'fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1')
    .header('X-Mashape-Key' , 'JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE')
    .header('X-Mashape-Host', 'spoonacular-recipe-food-nutrition-v1.p.mashape.com')
    .end(function (result) {
     // (data: any[]) => this.ingredients = data
     // console.log(searchTerm.value);
      console.log(result.status, result.body);
// const data = result.body.data;
//       if (!result.error && result.statusCode === 200) {
//              console.log(data);
//       } else {
//         console.log('Failed response', result.error);
//               }


    });
}







}

