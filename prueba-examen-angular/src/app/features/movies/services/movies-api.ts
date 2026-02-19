import { Injectable } from '@angular/core';
import { MoviesResponse } from '../models/movies-interface';
import { httpResource } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  public readonly url : string = "http://localhost:3000/response";
  public readonly getAllMovies  = httpResource<MoviesResponse>(()=>this.url);
}
