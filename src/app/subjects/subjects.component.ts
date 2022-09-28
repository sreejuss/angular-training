import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  myData = [];
  subject = new Subject();

  emitData(){
    this.subject.next(1);
    setTimeout(()=>{
      this.subject.next(2);
    },3000)
    setTimeout(()=>{
      this.subject.next(3);
    },6000)
    setTimeout(()=>{
      this.subject.next(4);
    },9000)
    setTimeout(()=>{
      this.subject.next(5);
    },12000)
  }

  getData(){
    this.subject.subscribe((data:any)=>{
      this.myData.push(data);
    })
  }
  
  constructor() {}

  ngOnInit() {}
}
