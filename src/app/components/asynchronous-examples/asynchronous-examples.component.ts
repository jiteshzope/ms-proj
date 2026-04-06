import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asynchronous-examples',
  templateUrl: './asynchronous-examples.component.html',
  styleUrls: ['./asynchronous-examples.component.css']
})
export class AsynchronousExamplesComponent implements OnInit {

  myObservable: Observable<string> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable((observer) => {
      let i = 1;
      setInterval(() => {
        observer.next(i + ' mayuiri');
        if(i === 5) {
          observer.complete();
        }
        if(i === 4){
          observer.error('An error occurred');
        }
        i++;
      }, 1000);

    });

    this.myObservable.subscribe({
      // data or next callback.... this will be called whenever observer.next() is called in observable
      next: (data) => {console.log(data)},
      // error callback ... once error is emitted using observer.error(), observable will stop emitting data and complete callback will not be called
      error: (error) => {console.error(error)},
      // complete callback ... this will be called once observer.complete() is called and no more data will be emitted
      complete: () => {console.log('Observable completed')}
    });


  }

}
