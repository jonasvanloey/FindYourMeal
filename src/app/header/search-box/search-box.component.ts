import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SearchBoxService} from '../search-box.service';

import {SearchService} from '../../shared/search.service';
import {Ingredients} from '../../shared/ingredients.model';
// import {rapidapi-connect} from 'rapidapi-connect';
declare let require: any;
@Component ({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  ingredientsForm: FormGroup;
  ingredient: Ingredients[];
  constructor(private searchBox: SearchBoxService, private searchservice: SearchService) { }
  ngOnInit() {
    this.addIngredient();
 //   this.initForm();


//     getRecipyByIngredient (ingredient: string) {
//       this.unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=' +
//         'false&ingredients=' + ingredient + '&limitLicense=false&number=5&ranking=1')
//         .header('X-Mashape-Key', 'JlriWXppBkmshvo2hWZ5wnSJLhSUp1Z1xNEjsnBi1CiXFKv2FE')
//         .header('X-Mashape-Host', 'spoonacular-recipe-food-nutrition-v1.p.mashape.com')
//         .header.append('Access-Control-Allow-Credentials', 'true')
//         .header.append('Access-Control-Allow-Methods', 'GET')
//         .header.append('Access-Control-Allow-Origin', '*')
//         .end(function (result) {
//           console.log(result);
//         });

    }

    addIngredient() {
    console.log(this.ingredientsForm.value);
    if (this.ingredientsForm.value !== '') {
      this.searchservice.addIngredientToList(this.ingredientsForm.value);
      this.ingredientsForm.reset();
    }
    }
  private initForm() {
    const ingredient = '';

   // this.searchBox.getRecipyByIngredient
   //   .subcribe

    this.ingredientsForm = new FormGroup({
      'ingredient': new FormControl(ingredient, Validators.required),

    });

  }
}


