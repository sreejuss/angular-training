import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',Validators.required),
    })
  }


  onSubmit(){
    console.log(this.loginForm.value);
    const { email, password}= this.loginForm.value;
    const local_email = localStorage.getItem('email')
    const local_password = localStorage.getItem('password')
    if (email===local_email&&password===local_password){
      alert("Login Success")
      this.router.navigate(['/products/dashboard'])
    }
    else
      alert("Invalid credentials")
  }

}