import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesMock } from './mocks/movies-mock';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  movies = moviesMock;
}
