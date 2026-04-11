import { Component, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, from, of } from 'rxjs';

@Component({
  selector: 'app-asynchronous-examples',
  templateUrl: './asynchronous-examples.component.html',
  styleUrls: ['./asynchronous-examples.component.css']
})
export class AsynchronousExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.myObservable = new Observable((observer) => {
    //   let i = 1;
    //   setInterval(() => {
    //     observer.next(i + ' mayuiri');
    //     if(i === 5) {
    //       observer.complete();
    //     }
    //     if(i === 4){
    //       observer.error('An error occurred');
    //     }
    //     i++;
    //   }, 1000);

    // });

    // this.myObservable.subscribe({
    //   // data or next callback.... this will be called whenever observer.next() is called in observable
    //   next: (data) => {console.log(data)},
    //   // error callback ... once error is emitted using observer.error(), observable will stop emitting data and complete callback will not be called
    //   error: (error) => {console.error(error)},
    //   // complete callback ... this will be called once observer.complete() is called and no more data will be emitted
    //   complete: () => {console.log('Observable completed')}
    // });

    // const observable1 = new Observable((observer) => {
    //   let i = 1;
    //   setInterval(() => {
    //     observer.next(i);
    //     if(i === 5) {
    //       observer.complete();
    //     }
    //     i++;
    //   }, 1000);
    // });

    // const newObservable = observable1.pipe(
    //   filter(
    //     (data : any) => data % 2 === 0
    //   ),
    //   map(
    //     (data : any) => data * 2
    //   ),
    //   map(
    //     (data : any) => data + ' mayuiri'
    //   )
    // )

    // newObservable.subscribe({
    //   next: (data) => {console.log(data)},
    //   error: (error) => {console.error(error)},
    //   complete: () => {console.log('Observable completed')}
    // });

    // steps: concatMap does
    // 1. source observable data emit karel one by one --> 1, 2, 3, 4, 5
    // 2. concatMap inner observable create karel for each data emitted by source observable --> of(1).pipe(delay(1000)), of(2).pipe(delay(1000)), of(3).pipe(delay(1000)), of(4).pipe(delay(1000)), of(5).pipe(delay(1000)) aani saglyanna toh collect kreun thevel swatahkade
    // 3. Mag toh saglyanna sequentially subscribe karel --> of(1).pipe(delay(1000)) la subscribe karel, toh 1 second nantar 1 emit karel aani complete hoil, mag of(2).pipe(delay(1000)) la subscribe karel, toh 1 second nantar 2 emit karel aani complete hoil, mag of(3).pipe(delay(1000)) la subscribe karel, toh 1 second nantar 3 emit karel aani complete hoil, mag of(4).pipe(delay(1000)) la subscribe karel, toh 1 second nantar 4 emit karel aani complete hoil, mag of(5).pipe(delay(1000)) la subscribe karel, toh 1 second nantar 5 emit karel aani complete hoil
    // 4. Ashya prakare concatMap source observable data sequentially process karel aani inner observable create karel for each data emitted by source observable and subscribe karel to it one by one
    // 5. Finally from([1, 2, 3, 4, 5]) ni return kelela observable complete hoil aani 'Observable completed' print hoil

    // from([1, 2, 3, 4, 5]).pipe(
    //   concatMap(
    //     (data)=> of(data).pipe(delay(1000)) // creating a new inner observable for each data emitted by the source observable and delaying it by 1 second
    //   )).subscribe({
    //     next: (data) => {console.log(data)},
    //     error: (error) => {console.error(error)},
    //     complete: () => {console.log('Observable completed')}
    //   });

    // steps: exhaustMap does
    // 1. source observable data emit karel one by one --> 1, 2, 3, 4, 5
    // 2. If exhaustMap does not have any active inner observable then it will accept the data emitted by source observable. So 1 saathi toh inner observable create karel --> of(1).pipe(delay(1000)) aani lagech subscribe karel, toh 1 second nantar 1 emit karel aani complete hoil, any value received by exhaustMap while the inner observable is active will be ignored, means 2, 3, 4, 5 will be ignored
    // 3. Finally from([1, 2, 3, 4, 5]) ni return kelela observable complete hoil aani 'Observable completed' print hoil

    from([1, 2, 3, 4, 5]).pipe(
      exhaustMap(
        (data)=> of(data).pipe(delay(1000)) 
      )).subscribe({
        next: (data) => {console.log(data)},
        error: (error) => {console.error(error)},
        complete: () => {console.log('Observable completed')}
      });

    // of('Hello', 'World').subscribe({
    //   next: (data) => {console.log(data)},
    //   error: (error) => {console.error(error)},
    //   complete: () => {console.log('Observable completed')}
    // });


  }

}
