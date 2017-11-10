import { Component, OnInit,Input } from '@angular/core';
import {Ingredients} from "../../../shared/ingredients.model";
import {SearchService} from "../../../shared/search.service";

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {
  @Input() ingredient: Ingredients;
  @Input() index : number;
  constructor(private searchservice: SearchService) { }

  ngOnInit() {
  }
  onDelete(id:number){
    this.searchservice.deleteIngredient(id);

  }

}
