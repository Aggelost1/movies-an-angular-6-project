import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {Movie} from '../shared/movie';
import {MoviesService} from '../shared/movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  
})
export class MovieListComponent implements OnInit, OnDestroy {
    
    movies : Movie[] = [];
    private subscription : Subscription;

    constructor(private movieService: MoviesService){}

 
    ngOnInit(){
        this.movies = this.movieService.getMovies();
        this.subscription = this.movieService.movieChanged.subscribe(
            (movies: Movie[]) => this.movies =movies
        )
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
