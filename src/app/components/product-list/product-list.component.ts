import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: {name: string, price: number}[] = [];

  goat = {'color': 'blue', 'font-weight': 'bold'};
  redColor: string = 'red';
  num1: number = 10;
  num2: number = 20;
  myBoolean: boolean = true;

  parentVar1: string = "Parent data 1";
  parentVar2: string = "Parent data 2";


  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged(data: string) {
    console.log('Received from child: ' + data);
  }

}
