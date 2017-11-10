import { Component, OnInit,Input  } from '@angular/core';
import {Recipes} from "../../../shared/recipes.model";

@Component({
  selector: 'app-gerecht-item',
  templateUrl: './gerecht-item.component.html',
  styleUrls: ['./gerecht-item.component.css']
})
export class GerechtItemComponent implements OnInit {
  @Input() recipe : Recipes;
  @Input() index : number;
  constructor() { }

  ngOnInit() {
  }

}
