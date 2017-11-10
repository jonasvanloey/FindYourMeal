import { Component, OnInit } from '@angular/core';
import {Gerecht} from '../../shared/gerecht.model';
import {SearchService} from '../../shared/search.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {AuthService} from "../../account/auth.service";

@Component({
  selector: 'app-gerecht-detail',
  templateUrl: './gerecht-detail.component.html',
  styleUrls: ['./gerecht-detail.component.css']
})
export class GerechtDetailComponent implements OnInit {
gerecht: Gerecht;
id: number;
  visible=false;
gerechtlist: any;
  constructor(private searchservice: SearchService, private route: ActivatedRoute, private authservice: AuthService) { }
favorite=[];
  // asyn nakijken of id veranderd om details van te laten zien
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params ) => {
        this.id = +params['id'];
        console.log(this.id);
         this.searchservice.getRecipeByIdInfo(this.id);


       }
    );
    this.gerechtlist = this.searchservice.getRecipeDetailList();

  }

      onFavorite(title:string, id:number){

        this.authservice.storefavorite(title,id);
      }
      }
