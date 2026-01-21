import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Counter implemented with Angular');
  protected count : number = 0;
  protected onClick(event: any): void {
    event.target.innerText === '+' ? this.count++ : this.count--;
  }
  protected reset(): void {
    this.count = 0;
  }

}
