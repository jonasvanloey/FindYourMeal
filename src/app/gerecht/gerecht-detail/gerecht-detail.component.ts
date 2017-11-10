import { Component, OnInit } from '@angular/core';
import {Gerecht} from '../../shared/gerecht.model';
import {SearchService} from '../../shared/search.service';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-gerecht-detail',
  templateUrl: './gerecht-detail.component.html',
  styleUrls: ['./gerecht-detail.component.css']
})
export class GerechtDetailComponent implements OnInit {
gerecht: Gerecht;
id: number;
gerechtlist: any;

visible =  true;
  favorite = [];
  constructor(private searchservice: SearchService, private route: ActivatedRoute) { }

  // asyn nakijken of id veranderd om details van te laten zien
  ngOnInit() {
       this.route.params.subscribe(
      (params: Params ) => {
        this.id = +params['id'];
        //   console.log(this.id);

        //  this.searchservice.getRecipeId(this.id);
        //  console.log( this.searchservice.getRecipeByIdInfo(this.id));
        this.searchservice.getRecipeByIdInfo(this.id);
      });
    // console.log(this.searchservice.getRecipeByIdInfo(this.id));
    this.gerechtlist = this.searchservice.getRecipeDetailList();
          if (this.gerechtlist) {
            this.visible = true;
          }
               }

  onFavorite() {
    this.favorite = [
      {
        // id: this.gerechtlist.id,
        // title: this.gerecht.title,
        // user_id:1
      }
    ];
    this.searchservice.storefavorite(this.favorite)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
      }
