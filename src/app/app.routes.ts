import {Routes , RouterModule} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDisplayComponent} from './movie-display/movie-display.component';

const APP_ROUTES: Routes =[
  
    
    { path: 'movie-list', component: MovieListComponent },
    { path: 'display-movie/:id', component: MovieDisplayComponent },    
    { path: '',redirectTo:'/movie-list', pathMatch: 'full' }
  ];
  
  export const routing = RouterModule.forRoot(APP_ROUTES);