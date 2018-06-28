import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import {Movie} from '../shared/movie';
import {MoviesService} from '../shared/movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  
})
export class MovieListComponent implements OnInit, OnDestroy {
    
    movies : Movie[];
    private subscription : Subscription;

    

    constructor(private movieService: MoviesService){}

// initializing my movies array from the movie service and checking for changes so it would be updated
    ngOnInit(){      
        this.subscription = this.movieService.getMovies().subscribe(
            (movies) => this.movies = movies
        )
        
       
    }
   
//unsubscribing on destraction to avoid memory leaks
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

   
}
