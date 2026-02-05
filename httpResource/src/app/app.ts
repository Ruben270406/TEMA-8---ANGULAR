import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvinceResponse } from './models/province';
import { Movies } from './models/movies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('httpResource');
  protected provicesResource = httpResource<ProvinceResponse>(
    () => 'http://localhost:3000/provinces',
  );

  readonly url = 'https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies';
  readonly options = {
	  method: 'GET',
	  headers: {
		'x-rapidapi-key': '3e29b3d745msh3b3c2b0230d62aep13db2fjsn82fa847ffb24',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};
protected fetchMovies = httpResource<Movies[]>(() => ({
  url: this.url,
  method: this.options.method,
  headers: this.options.headers
}));

}
