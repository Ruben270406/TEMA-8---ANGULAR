import { Component, input, output } from '@angular/core';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-card-movie',
  imports: [],
  templateUrl: './card-movie.html',
  styleUrl: './card-movie.css',
})
export class CardMovie {
  public movie = input.required<Movies>();

  protected onMovieSelected = output<string>();
  protected onMovieRemoved = output<string>();

  protected selectMovie(title: string): void {
    this.onMovieSelected.emit(title);
  }

  protected deleteMovie(id: string): void
{
  this.onMovieRemoved.emit(id);
}
}