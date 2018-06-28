import {Injectable, EventEmitter} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
  } from 'angularfire2/firestore';

import {Movie} from './movie';

@Injectable()
export class MoviesService {
    //will be needed later when i will update my list 
    moviesChanged = new EventEmitter<Movie[]>();

    private moviesRef: AngularFirestoreCollection<Movie>;
    private movieRef: AngularFirestoreDocument<Movie>;
    private newMovies: Observable<Movie[]>;


    constructor(private http : HttpClient,private afs: AngularFirestore) {
        //this.fetchData();
        this.moviesRef = this.afs.collection('movies');

        this.newMovies = this.moviesRef.snapshotChanges()
        .pipe(map(actions => {
          return actions.map(a => {
            return {
              id: a.payload.doc.id,
              ...a.payload.doc.data()
            } as Movie;
          });
        })
      );

    }

    // ngOnInit(){
    //     this.http.get('./assets/movies.json')
    //     .subscribe( ( data : Movie[] ) =>{
    //     this.movies = data;
    //     })
    // }
    //just a placeholder untill I import and write to a .json (or from an api later on)
    // private movies : Movie[]= [
    //     new Movie(
    //         "Avengers Infinity War",
    //         "very good",
    //         "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5aabd60603ce641d203135e6/1521210900998/epic-poster-released-for-avengers-infinity-war-packs-in-a-ton-of-characters1?format=750w",
    //         ["Robert Downey Jr.","Scarlett Johansson"]
    //     ),
    //     new Movie(
    //         "Star Wars 5, The Empire Strikes Back",
    //         "excelent",
    //         "http://t1.gstatic.com/images?q=tbn:ANd9GcTtXwQAEDxEY3E9Nn78H96VZCjlV6hZWPlDd5IpVNyeuzO2vT17",
    //         [	"Harrison Ford","Mark Hill","Carrie Fisher"]
    //     )        
    // ]

    //sending out the current movies list
    getMovies():Observable<Movie[]>{
      return  this.newMovies
      
    }
     
    //retrieving the ith movie at the array (array numbering starts from 0)  
    getMovie(id : string) : Observable<Movie>{
        this.movieRef = this.moviesRef.doc(id);
        return this.movieRef.valueChanges();
    }

    deleteMovie(movieId : string) :void {
        this.moviesRef.doc(movieId).delete();
    }
   
    addMovie(movie : Movie) : void {
       this.moviesRef.add(movie);
    }
   
    editMovie(oldMovieId: string ,newMovie: Movie){
       this.moviesRef.doc(oldMovieId).update(newMovie)
    }
    
    // //deleting a movie from the array (so the numbering for the ret changes accordinigly)
    // deleteMovie(movie : Movie){
    //     this.movies.splice(this.movies.indexOf(movie),1);
    //     this.moviesChanged.emit(this.movies);

    // }
    
    // // adds a new movie at the end of the array
    // addMovie(movie : Movie){
    //     console.log("pushed new movie")
    //     this.movies.push(movie);
    //     this.moviesChanged.emit(this.movies);
    // }
    
    // //replaces a movie with a other one you give 
    // editMovie(oldMovie: Movie ,newMovie: Movie){
    //     this.movies[this.movies.indexOf(oldMovie)] = newMovie;
    //     this.moviesChanged.emit(this.movies);
    // }
    
 // for this to work i need to have write acces to my .json file and since I am not gonna eventually use the .json
 // but will use firebase or a imdb api or similar i am not gonna bother   
    // storeData(){
    //     const body= JSON.stringify(this.movies)
    //     console.log("storedata inside")
    //     return this.http.put('./assets/movies.json', body )
    //   }
    
    // fetchData(){
    //     return this.http.get('./assets/movies.json')
    //         .subscribe( ( data : Movie[] ) =>{
    //         this.movies = data;
    //         this.moviesChanged.emit(this.movies);
    //         }
    //     )
    //   }
}