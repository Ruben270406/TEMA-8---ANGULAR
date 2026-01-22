import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dni',
  imports: [],
  templateUrl: './dni.html',
  styleUrl: './dni.css',
})
export class Dni {
  @Input() apellidos: string = '';
  @Input() nombre: string = '';
  @Input() dni: string = '';
  @Input() nacionalidad: string = 'ESP';
  @Input() fechaNacimiento: string = '01/01/2000';
  @Input() sexo: string = 'H';
  @Input() fechaValidez: string = '01/01/2030';
}
