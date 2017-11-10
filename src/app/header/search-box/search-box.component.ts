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
  constructor(private searchBox: SearchBoxService, private searchservice: SearchService) { }
  ngOnInit() {
  this.initForm();

  }


  addIngredient() {
    console.log(this.ingredientsForm.value.ingredient);
    if (this.ingredientsForm.value.ingredient === "") {
      console.log('empty')
    }
    else {
      this.searchservice.addIngredientToList(this.ingredientsForm.value);
      this.ingredientsForm.reset()
    }
  }





      private initForm() {
        const ingredient = '';

        this.ingredientsForm = new FormGroup({
          'ingredient': new FormControl( ingredient, Validators.required),



        });


      }

  }

