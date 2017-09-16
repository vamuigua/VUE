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
}