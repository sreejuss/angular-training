import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  form: FormGroup;
  submitted: boolean=false;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({});
   }

  ngOnInit(): void {

    this.form=this.fb.group({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'name': new FormControl(''),
      'organizationName': new FormControl(''),
      'checkboxValue': new FormControl(false),
    })
  }
  get f() { return this.form.controls; }

  onSubmit(){
    this.submitted=true;
    if(this.form.valid) {
      console.log("Valid",this.form.value);
      
    }    else{
      console.log("Invalid");
      
    }
    
  }
}
