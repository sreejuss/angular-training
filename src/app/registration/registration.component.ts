import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  genders = ['male', 'female']
  roles = ['admin','role x', 'role y']
  signupForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {


    // this.signupForm = new FormGroup({
    //   'email': new FormControl(null,[Validators.required,Validators.email]),
    //   'password': new FormControl(null,Validators.required),
    //   'gender': new FormControl(null,Validators.required),
    //   'role': new FormControl(null,Validators.required),
    // })
    this.signupForm=this.fb.group({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
      'gender': new FormControl(null,Validators.required),
      'role': new FormControl(null,Validators.required),
    })

  }

  

  onSubmit(){
    console.log(this.signupForm.get('email').value);
  }

}