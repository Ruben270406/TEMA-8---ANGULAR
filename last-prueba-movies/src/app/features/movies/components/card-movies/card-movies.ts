import { Component } from '@angular/core';
import { MovieInterface } from '../../models/movie-interface';
import { input } from '@angular/core';

@Component({
  selector: 'app-card-movies',
  imports: [],
  templateUrl: './card-movies.html',
  styleUrl: './card-movies.css',
})
export class CardMovies {
  public movies = input.required<MovieInterface>();
}
