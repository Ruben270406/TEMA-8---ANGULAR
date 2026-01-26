import { Component, EventEmitter, output, Output } from '@angular/core';
import { LoginData } from '../models/login-data.ts/login-data.ts';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 public onSubmit = output<LoginData>();

  public submit(name: string, email:string, message:string): void {
    let logingData: LoginData = {
      name: name,
      email: email, 
      message: message
    };
    this.onSubmit.emit(logingData);
  }
}
