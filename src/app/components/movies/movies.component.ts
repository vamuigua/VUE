import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';



@Component({
	moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html',
})
export class MoviesComponent  { 
	popularList:Array<Object>;
	theatersList:Array<Object>;


	constructor(private _moviesService: MovieService){
		this._moviesService.getPopular().subscribe(res => {
			this.popularList = res.results;
		});

		this._moviesService.getInTheaters().subscribe(res => {
			this.theatersList = res.results;
		});
	}
}
