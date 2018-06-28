import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';


import {Movie} from '../shared/movie';
import {MoviesService} from '../shared/movies.service';


@Component({
  selector: 'movie-display',
  templateUrl: './movie-display.component.html',
  
})
export class MovieDisplayComponent implements OnInit, OnDestroy{
    movie : Movie;
    private movieIndex : string;
    public movieIndexPlus: number;
    public movieIndexMinus: number;

    private subscription : Subscription;
    private subscription2 : Subscription;
    constructor(private moviesService: MoviesService, private router: Router, private activatedroute: ActivatedRoute  ){}
   
    ngOnInit(){
     this.subscription = this.activatedroute.params.subscribe(
      (params:any) => {
            this.movieIndex = params['id']; 
            //load the movie at the movie index passed in the browser route if it exists else redirect to the 1st movie
            this.subscription2=this.moviesService.getMovies().subscribe(
                (movies)=>{
                    let indexes = [];
                    let movie:any;
                    for ( movie  in movies){
                        indexes.push(movie.id);
                    }
                    if(this.movieIndex in indexes ){  
                        this.router.navigateByUrl('/display-movie/not-found');          
                    } else {
                        this.moviesService.getMovie(this.movieIndex).subscribe(
                            (movie)=>this.movie=movie
                        )      
                    }      
                    //fix the next and previous buttons to stay within the list length
                    if(parseInt(params['id'])<movies.length - 1){
                        this.movieIndexPlus = parseInt(params['id'])+1;
                    }else{
                        this.movieIndexPlus = 0;
                    }
                    if(parseInt(params['id'])>0){
                        this.movieIndexMinus = parseInt(params['id'])-1;
                    }else{
                        this.movieIndexMinus = movies.length-1;
                    }
                }
            );   
        });  
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}   
