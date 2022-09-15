import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',Validators.required),
    })
  }


  onSubmit(){
    console.log(this.loginForm.value);
    const { email, password}= this.loginForm.value;
    if (email==="admin"&&password==="password")
      alert("Login Success")
    else
      alert("Invalid credentials")
  }

}