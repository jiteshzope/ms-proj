import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-proj';

  appInfoData: string = 'This is app component data';
  appInfoDetails = { name: 'Alice', age: 25 };

  productList = [
    {name: 'Product 1', price: 100},
    {name: 'Product 2', price: 200},
    {name: 'Product 3', price: 300}
  ];

  ngOnInit(){
    setTimeout(()=>{
      // this.appInfoDetails = { name: 'Mayuri', age: 25 };
      // this.appInfoDetails.name = 'Mayuri';
      this.appInfoDetails = {...this.appInfoDetails, name : 'Mayuri'};
    }, 4000);
  }

  // $event is the event object which contains information about the event that occurred, on which element it occured and everything related to the element
  // onNameEnter(event: any) {
  //   console.log('event:', event);
  //   console.log('input element object:', event.target);
  //   console.log('current text in input element:', event.target.value);
  //   console.log('color of the input element:', event.target.style.color);
    
  // }

  
}
