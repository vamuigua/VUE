import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class MovieService{
	apiKey: string;
	constructor(private _jsonp:Jsonp){
		this.apiKey = '9b0149b4dc5fb4460fa59690a962faae';
		console.log('MovieService  initialized...');
	}

	getPopular(){
		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apiKey)
			.map(res => res.json());
	}

	getInTheaters(){
		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-15&primary_release_date.lte=2017-12-30&api_key='+this.apiKey)
			.map(res => res.json());
	}

	searchMovies(searchStr:string){
		return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
			.map(res => res.json());
	}

	getMovie(id:string){
		return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
			.map(res => res.json());
	}
}