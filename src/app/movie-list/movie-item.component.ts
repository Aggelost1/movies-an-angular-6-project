import { Component, Input } from '@angular/core';

import {Movie} from '../shared/movie';
import {MoviesService} from '../shared/movies.service';
@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: Movie;
  @Input() movieId: number;

  constructor(private movieService: MoviesService){}

  onDelete(){
    this.movieService.deleteMovie(this.movie);
  }
    
}
