import { LoginData } from './../../models/login-data.ts/login-data.ts';
import { Component, output } from '@angular/core';
import { FormContent } from "../form-content/form-content";


@Component({
  selector: 'app-form',
  imports: [FormContent],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  public h2:string="";
  public test(event:LoginData) :void{
    console.log(event.name, event.email, event.message);
  
  }
  public datos=output<LoginData>();

  public enviar(datos:LoginData){
    this.datos.emit(datos);
  }
}
