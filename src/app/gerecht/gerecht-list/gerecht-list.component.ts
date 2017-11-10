import { Component, OnInit } from '@angular/core';
import {Recipes} from '../../shared/recipes.model';
import {SearchService} from '../../shared/search.service';

@Component({
  selector: 'app-gerecht-list',
  templateUrl: './gerecht-list.component.html',
  styleUrls: ['./gerecht-list.component.css']
})
export class GerechtListComponent implements OnInit {
recipes: Recipes[];

  constructor(private searchservice: SearchService) { }

  ngOnInit() {
    this.recipes = this.searchservice.getRecipelist();
  }

}
