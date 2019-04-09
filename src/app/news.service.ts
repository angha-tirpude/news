import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {Http} from '@angular/http';
import * as moment from 'moment';
import {Observable, Subject} from 'rxjs';
import { map } from "rxjs/operators";
import {forkJoin} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // private news: News[] = [];
  // private newsUpdated = new Subject<{ news: News[]; newsCount: number }>();
  newsfeed;
  feed1;
  feed2;
  search = 'the-hindu';
    constructor(private http: Http ) { }
  
    getfeed1(search) {
  
    const now = new Date(). toISOString().substr(0, 10);
      const lastDay = moment().subtract(1 , 'days').format().substr(0, 10);
        const url = 'https://newsapi.org/v1/articles?source=the-hindu&apiKey=840cde64d9c6417284981a19fd4a13d7';
            const url2 = 'https://newsapi.org/v2/everything?q='
            + search + '&from=' + now + '&' + now + '&sortBy=popularity&apiKey=840cde64d9c6417284981a19fd4a13d7';
        const toi =  this.http.get(url)
        .map((response: Response) => response.json());
  
      const bbc = this.http.get(url2)
      .map((response: Response) => response.json());
      console.log(lastDay);
      return forkJoin([toi, bbc]);
  
    }
  
  load() {
    return this.getfeed1(this.search);
  }
  
  
  
  getLatest() {
    const now = new Date(). toISOString().substr(0, 10);
      const url = 'https://newsapi.org/v1/articles?source=the-hindu&apiKey=840cde64d9c6417284981a19fd4a13d7';
        const url2 = 'https://newsapi.org/v2/everything?q='
        + this.search + '&from=' + now + '&' + now + '&sortBy=popularity&apiKey=840cde64d9c6417284981a19fd4a13d7';
        const toi =  this.http.get(url)
      .map((response: Response) => response.json());
  
    const bbc = this.http.get(url2)
    .map((response: Response) => response.json());
  return forkJoin([toi, bbc]);
  }
  
    getfeed2() {
      const url = 'https://newsapi.org/v1/articles?source=abc-news-au&apiKey=840cde64d9c6417284981a19fd4a13d7&limit=20';
      return this.http.get(url)
          .map((response: Response) => response.json());
  
        }
  
  }

