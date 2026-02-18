import { Component } from '@angular/core';
import { input } from '@angular/core';
import { MoviesInterface } from '../../models/movies-interface';


@Component({
  selector: 'app-card-movies',
  imports: [],
  templateUrl: './card-movies.html',
  styleUrl: './card-movies.css',
})
export class CardMovies {
  public movie= input.required<MoviesInterface>();
}
