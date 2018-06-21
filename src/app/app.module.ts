import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {routing} from './app.routes'

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-list/movie-item.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { MoviesService } from './shared/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDisplayComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],

  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
