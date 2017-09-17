import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MovieService} from  '../../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: 'movie.component.html',
})

export class MovieComponent implements OnInit{
	movie: Object;

	constructor(
		private router:ActivatedRoute,
		private _moviesService:MovieService){

	}

	ngOnInit(){
		this.router.params.subscribe((params) => {
			let id = params['id'];
			this._moviesService.getMovie(id).subscribe(movie => {
				this.movie = movie;
			});
		});
	}
}