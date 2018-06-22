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

// initializing my movies array from the movie service
    ngOnInit(){
        this.movies = this.movieService.getMovies();
        this.subscription = this.movieService.moviesChanged.subscribe(
            (movies: Movie[]) => this.movies =movies
        )
        this.movieService.fetchData();
    }
   
//unsubscribing on destraction to avoid memory leaks
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
