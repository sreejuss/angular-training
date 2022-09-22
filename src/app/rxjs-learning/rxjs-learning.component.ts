import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  of,
  debounceTime,
  fromEvent,
  interval,
  elementAt,
} from 'rxjs';
import { filter, first, last, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {

  searchForm: FormGroup;

  // of operator
  string$: Observable<any> = of('hello');
  array$: Observable<any> = of(['Sreeju', 'John', 'Mark']);
  object = {
    id: 10,
    name: 'sreeju',
  };
  object$: Observable<any> = of(this.object);
  
  // end of of-operator
  constructor(private fb: FormBuilder) {}
  // from event
  @ViewChild('validate')
  validate: ElementRef;
  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });
    this.searchForm
      .get('name')
      .valueChanges.pipe(
        //take(2),
        // elementAt(1),
        // first(),
        // last(),
        //debounceTime(400)
        filter((v) => this.checkCondition(v))
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.string$.subscribe((res) => {
      console.log(res);
    });
    this.array$.subscribe((res) => {
      const seqNum$ = interval(500);
      seqNum$.subscribe((num) => {
        if (num < 5) {
          console.log(res + num);
        }
      });
    });
    this.object$.subscribe((res) => {
      console.log(res);
    });
  }

  checkCondition(v) {
    return v.length < 6 ? true : false;
  }

  readValue() {
    console.log;
  }
  fromEventObservable() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    btnObservable$.subscribe((data) => {
      console.log(data);
    });
  }
}
