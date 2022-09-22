import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  genders = ['male', 'female']
  roles = ['admin','role x', 'role y']
  signupForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

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
    const {email,password}=this.signupForm.value;
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    alert("Registration Successfull!")
    this.router.navigate(['login'])
  }

}