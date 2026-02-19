import { Component } from '@angular/core';
import { MoviesApi } from './services/movies-api';
import { inject } from '@angular/core';
import { ListMovies } from './components/list-movies/list-movies';


@Component({
  selector: 'app-movies',
  imports: [ListMovies],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  public moviesApi = inject(MoviesApi);
}
