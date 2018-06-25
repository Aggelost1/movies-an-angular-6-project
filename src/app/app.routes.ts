import {Routes , RouterModule} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDisplayComponent} from './movie-display/movie-display.component';
import {MovieEditComponent }  from './movie-list/movie-edit/movie-edit.component';

const APP_ROUTES: Routes =[
  
    
    { path: 'movie-list', component: MovieListComponent },
    { path: 'edit-movie/:id', component: MovieEditComponent },
    { path: 'new-movie', component: MovieEditComponent },    
    { path: 'display-movie/:id', component: MovieDisplayComponent },    
    { path: '',redirectTo:'/movie-list', pathMatch: 'full' }
  ];
  
  export const routing = RouterModule.forRoot(APP_ROUTES);