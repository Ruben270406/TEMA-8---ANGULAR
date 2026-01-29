import { Component, EventEmitter, output, Output } from '@angular/core';
import { LoginData } from '../models/login-data.ts/login-data.ts';
import { Form } from "./form/form";


@Component({
  selector: 'app-login',
  imports: [Form],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 public name: string = "";
 public email: string = "";
  public message: string = "";

  public test(event: LoginData): void {
    this.name = event.name;
    this.email = event.email;
    this.message = event.message;
  }

}
