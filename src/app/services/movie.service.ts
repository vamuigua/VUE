import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class MovieService{
	apiKey: string;
	constructor(private _jsonp:Jsonp){
		this.apiKey = '';
	}
}