import { Component, inject } from '@angular/core';
import { MoviesApi } from './services/movies-api';
import { ListMovies } from "./components/list-movies/list-movies";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [ListMovies],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movie {
  public moviesApi = inject(MoviesApi);
}