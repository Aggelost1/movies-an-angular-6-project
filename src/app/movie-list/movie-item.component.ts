import { Component, Input } from '@angular/core';

import {Movie} from '../shared/movie';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  
})
export class MovieItemComponent {
    @Input() movie: Movie;
    @Input() movieId: number;
    public  routerlink = "/display-movie/"+this.movieId ;
}
