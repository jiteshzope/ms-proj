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

  
}
