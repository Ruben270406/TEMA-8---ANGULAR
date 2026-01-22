import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  imports: [CommonModule],
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.css',
})
export class ListMovies {
  public ListMovies = input<any>();
}
