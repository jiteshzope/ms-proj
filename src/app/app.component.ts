import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-proj';

  productList = [
    {name: 'Product 1', price: 100},
    {name: 'Product 2', price: 200},
    {name: 'Product 3', price: 300}
  ];
}
