import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { Subscription } from 'rxjs';

import {MoviesService} from  "../../shared/movies.service";
import {Movie} from '../../shared/movie';



@Component({
  selector: 'movie-edit',
  templateUrl: 'movie-edit.component.html',
 
})
export class MovieEditComponent implements OnInit ,OnDestroy {
 
 private movieForm : FormGroup;
 private subscription :Subscription;
 private movie : Movie;
 private movieIndex: number ;
 private isNew=true;

 constructor(private activatedroute: ActivatedRoute, private router:Router, private moviesService : MoviesService, private formBuilder:FormBuilder){}

 ngOnInit(){
   
   this.subscription = this.activatedroute.params.subscribe(
   (params:any) => {
     if(params.hasOwnProperty('id')){
     this.movieIndex = +params['id'];
     this.isNew =false;
     this.movie = this.moviesService.getMovie(this.movieIndex);
     }else{
       this.isNew= true;
       this.movie = null;
       }
      this.InitForm(); 
     }
   );  
 }

  onSubmit(){
     const newMovie = this.movieForm.value;
     if(this.isNew){
       this.moviesService.addMovie(newMovie);
       console.log("added new movie");
     }else{
       this.moviesService.editMovie(this.movie ,newMovie);
       console.log("edited a movie");
     }
     this.navigateBack();
  }
  
  onCancel(){
    this.navigateBack();
  }

  onRemoveActor(index:number){
    (<FormArray>this.movieForm.controls['actors']).removeAt(index);
  }

 onAddActor(name: string){
  (<FormArray>this.movieForm.controls['actors']).push(new FormGroup({
            name: new FormControl(name)            
          })
  )
 }
 

  private navigateBack(){
    this.router.navigate(['/movie-list']);
  } 

 ngOnDestroy(){
  this.subscription.unsubscribe(); 
 }

  
  private InitForm() {
    let movieTitle = '';
    let moviePosterUrl = '';
    let movieContent = '';
    const movieActors: FormArray = new FormArray([]);

    if (!this.isNew) {
       movieTitle = this.movie.title;
      moviePosterUrl = this.movie.posterUrl;
      movieContent = this.movie.description;
     if (this.movie.hasOwnProperty('actors')){
        for (let i=0; i<this.movie.actors.length; i++) {
          movieActors.push(
            new FormGroup({
             name: new FormControl(this.movie.actors[i])
              
           })
          );
        }
     }
    }

    this.movieForm = this.formBuilder.group({
      title: [movieTitle, Validators.required],
      posterUrl: [moviePosterUrl, Validators.required],
      description: [movieContent, Validators.required],
      actors: movieActors
    });
    
  }
      
  


}
