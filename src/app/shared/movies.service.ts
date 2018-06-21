import {Injectable, EventEmitter} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Movie} from './movie';

@Injectable()
export class MoviesService{
    //will be needed later when i will update my list 
    movieChanged = new EventEmitter<Movie[]>();

    constructor(private http : HttpClient) {}

    private movies : Movie[] = [
        new Movie(
            "Avengers Infinity War",
            "very good",
            "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5aabd60603ce641d203135e6/1521210900998/epic-poster-released-for-avengers-infinity-war-packs-in-a-ton-of-characters1?format=750w",
            ["Robert Downey Jr.","Scarlett Johansson"]
        ),
        new Movie(
            "Star Wars 5, The Empire Strikes Back",
            "excelent",
            "http://t1.gstatic.com/images?q=tbn:ANd9GcTtXwQAEDxEY3E9Nn78H96VZCjlV6hZWPlDd5IpVNyeuzO2vT17",
            [	"Harrison Ford","Mark Hill","Carrie Fisher"]
        )        
    ]

    getMovies(){
        return this.movies;
    }
      
    getMovie(id : number){
        return this.movies[id];
    }
    
    deleteMovie(movie : Movie){
         this.movies.splice(this.movies.indexOf(movie),1);
    }
    
    addMovie(movie : Movie){
        this.movies.push(movie);
    }
    
    editMovie(oldMovie: Movie ,newMovie: Movie){
        this.movies[this.movies.indexOf(oldMovie)] = newMovie;
    }
    
}