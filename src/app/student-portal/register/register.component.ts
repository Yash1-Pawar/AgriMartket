import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MOCK_LOGIN_DATA } from 'src/app/mockdata/farmersPortal/users';
import { User } from 'src/app/model/User';
import { Validator } from './Validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users:User[] = MOCK_LOGIN_DATA;
  registered:string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registered = 'User Registered Successfully'
  }

  registerForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    college: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    about: new FormControl(''),
    password: new FormControl('', [Validators.required, Validator.setPassword]),
    cpassword: new FormControl('', [Validators.required, Validator.matchPasswordValidator])
  });

  get userId(): FormControl {
    return this.registerForm.get('userId') as FormControl;
  }

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get college(): FormControl {
    return this.registerForm.get('college') as FormControl;
  }

  get mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }

  get about(): FormControl {
    return this.registerForm.get('about') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get cpassword(): FormControl {
    return this.registerForm.get('cpassword') as FormControl;
  }


}
