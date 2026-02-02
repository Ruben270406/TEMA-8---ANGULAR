import { Component } from '@angular/core';

import { ListMovies } from './components/list-movies/list-movies';
import { MoviesApi } from './services/movies-api';

@Component({
  selector: 'app-movies',
  imports: [ListMovies],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  //movies = moviesMock;
  public h3: string = "Angular Movies";
  constructor(protected testMovies: MoviesApi) {
    
  }
}
