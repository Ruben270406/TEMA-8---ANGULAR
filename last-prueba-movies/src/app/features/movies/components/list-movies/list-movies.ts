import { Component } from '@angular/core';
import { MovieInterface} from '../../models/movie-interface';
import { input } from '@angular/core';
import { CardMovies } from '../card-movies/card-movies';


@Component({
  selector: 'app-list-movies',
  imports: [CardMovies],
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.css',
})
export class ListMovies {
  public listMovies = input.required<MovieInterface[]>();
}
