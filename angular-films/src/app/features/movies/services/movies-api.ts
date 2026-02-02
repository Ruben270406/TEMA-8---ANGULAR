import { Injectable } from '@angular/core';
import { Movies } from '../models/movies';
import { moviesMock } from '../mocks/movies-mock';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
public movies: Movies[] = moviesMock;
}
