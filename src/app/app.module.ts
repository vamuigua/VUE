import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';


import { AppComponent }  from './app.component';
import {MoviesComponent} from './components/movies/movies.component'


@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, FormsModule ],
  declarations: [ AppComponent, MoviesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
