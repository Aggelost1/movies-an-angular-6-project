import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';


import {routing} from './app.routes'

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-list/movie-item.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { MoviesService } from './shared/movies.service';
import { MovieEditComponent } from './movie-list/movie-edit/movie-edit.component';
import { HeaderComponent } from './core/header.component';
import { DropdownDirective } from './core/dropdown.directive';
import { SearchService } from './search/search.service';
import { SearchComponent } from './search/search.component';
//imports for angulardire2
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDisplayComponent,
    MovieEditComponent,
    HeaderComponent,
    SearchComponent,
    DropdownDirective,
    
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    //angularfire2 imports
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    //my modules
    routing
  ],

  providers: [MoviesService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
