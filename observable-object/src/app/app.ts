import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animes } from "./features/animes/animes";
import { AnimeApi } from './features/animes/services/anime-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Animes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('observable-object');
}
