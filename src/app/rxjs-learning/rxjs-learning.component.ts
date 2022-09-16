import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, of, debounceTime } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  searchForm:FormGroup;

  student$: Observable<any> = of('hello');

  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.searchForm=new FormGroup({
      name: new FormControl('')
    })
    this.searchForm.get('name').valueChanges.pipe(
      debounceTime(400)
    ).subscribe(data=>{
      console.log(data)
    })
    this.student$.subscribe((res)=>{
      console.log(res)
    })
  }

  readValue(){
    console.log
  }
}
