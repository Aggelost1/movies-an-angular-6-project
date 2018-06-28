import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from '../shared/movies.service';





@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent   {
   
   

    constructor(private moviesService: MoviesService) {

    }

   

    // onStore() {
    //     this.moviesService.storeData().subscribe(
    //         data => console.log(data),
    //         error => console.log(error)
    //     )
    // }

    // onFetch() {
    //     return this.moviesService.fetchData()
    // }

   
    // onLogout() {
    //     this.authService.logout();
    // }

   
}
