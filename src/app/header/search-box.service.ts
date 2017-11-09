import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchBoxService {

  constructor(private http: Http) { }

}
