import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {SearchBoxService} from '../search-box.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
private  data: any[];
  ingredients = [];
   constructor(private findIngr: SearchBoxService) { }

  ngOnInit() {
  }


  findIngredient(searchTerm: HTMLInputElement) {
    console.log(`User entered: ${searchTerm.value}`);

    // this.findIngr.fetchFindIngredient(searchTerm.value)
    //   .subscribe(
    //     data   =>     this.ingredients =  data,
    //       (error) => console.log(error)
    //     );
    // console.log(this.ingredients);
    this.findIngr.fetchFindIngredient(searchTerm.value)
      .subscribe(
        data => { this.ingredients.push(data);
        console.log(this.ingredients); }
      );
      }

}
