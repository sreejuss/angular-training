import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  genders = ['male', 'female']
  roles = ['admin','role x', 'role y']
  signupForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null,Validators.required),
      'password': new FormControl(null),
      'gender': new FormControl(null),
      'role': new FormControl(null),
    })
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }

}