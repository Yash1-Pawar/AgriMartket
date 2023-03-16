import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.loggedIn = 'User LoggedIn Successfully'
  }

  get userId(): FormControl {
    return this.loginForm.get("userId") as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }

}
