import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResponse } from '../models/movie-interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  public readonly url : string = "http://localhost:3000/response";
  public readonly getAllMovies = httpResource<MovieResponse>(() => this.url);
  
}
