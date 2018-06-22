import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';


import {Movie} from '../shared/movie';
import {MoviesService} from '../shared/movies.service';


@Component({
  selector: 'movie-display',
  templateUrl: './movie-display.component.html',
  
})
export class MovieDisplayComponent {
    movie : Movie;
    private movieIndex : number;
    private subscription : Subscription;
    constructor(private moviesService: MoviesService, private router: Router, private activatedroute: ActivatedRoute  ){}
   
    ngOnInit(){
     this.subscription = this.activatedroute.params.subscribe(
      (params:any) => {
        this.movieIndex = params['id'];
        this.movie = this.moviesService.getMovie(this.movieIndex);
      }
     );     
    }
}   
