import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';


import {routing} from './app.routes'

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-list/movie-item.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { MoviesService } from './shared/movies.service';
import { MovieEditComponent } from './movie-list/movie-edit/movie-edit.component';
import { HeaderComponent } from './core/header.component';
import { DropdownDirective } from './core/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDisplayComponent,
    MovieEditComponent,
    HeaderComponent,
    DropdownDirective,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,    
    routing
  ],

  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
