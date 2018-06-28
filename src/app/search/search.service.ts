
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    value: string;
    apiKey: string;
    searchUrlpa1: string;
    searchUrla: string;
    movieQuery: string;
    pageNumber: number;
    constructor(private http: HttpClient) {
      this.apiKey = '0af0cd62a4131f05e9e97a450fbee87f';
      this.movieQuery = 'query=';
      this.searchUrlpa1 = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`;
      this.searchUrla = this.searchUrlpa1 + '&language=en-US&page='//+this.pageNumber+'&include_adult=false&';
      this.value = '';
    };

    public movieSearch(value: string, page: number = 3){
        console.log("movie search in service",value)
        this.movieQuery = page + `&include_adult=false&query=${value}`;

        this.http.get(this.searchUrla + this.movieQuery).subscribe((response:any)=>
            console.log(response)
        )
        
    }

 
}