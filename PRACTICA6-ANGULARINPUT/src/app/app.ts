import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dni } from "./features/dni/dni";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dni],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PRACTICA6-ANGULARINPUT');
}
