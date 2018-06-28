import { Component} from '@angular/core';
import { SearchService } from './search.service';


@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
 
})
export class SearchComponent  {
    constructor(private searchService:SearchService){}

onSearch(query:string){
    this.searchService.movieSearch(query);
    console.log("enter pressed",query)
}

}
 