import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dni',
  imports: [],
  templateUrl: './dni.html',
  styleUrl: './dni.css',
})
export class Dni {
  public nombre = input<string>('');
  public apellidos = input<string>('');
  public dni = input<string>('');
  
}
