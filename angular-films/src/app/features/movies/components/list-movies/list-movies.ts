import { Component, input } from '@angular/core';
import { Movies } from '../../models/movies';
import { CardMovie } from '../card-movie/card-movie';

@Component({
  selector: 'app-list-movies',
  imports: [CardMovie],
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.css',
})
export class ListMovies {
  public movies = input<Movies[]>();
  protected selectedMovie = '';

  protected setTitle(title: string): void {
    this.selectedMovie = title;
  }

  
}