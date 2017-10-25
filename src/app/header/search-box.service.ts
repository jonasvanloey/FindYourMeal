import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchBoxService {

  constructor(private http: Http) { }
fetchFindIngredient(voedsel) {
    return this.http.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + voedsel)
      .map((response: Response) => {
      const data  = response.json();
    console.log(data.data);
    return data.data;
      }).catch(
        (error: Response) => {
          return Observable.throw('something went wrong' + error);
        }
      );

}
}
