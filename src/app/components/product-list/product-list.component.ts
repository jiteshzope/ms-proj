import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // here we are decorating the myDivElement property with @ViewChild decorator to get reference of the div element
  @ViewChild('myDiv') myDivElement : ElementRef<any> | undefined; // myDivElement of type ElementRef of generic type any

  // here we are decorating the products property with @Input decorator to receive data from parent component
  @Input() products: {name: string, price: number}[] = [];

  goat = {'color': 'blue', 'font-weight': 'bold'};
  redColor: string = 'red';
  num1: any = 10;
  num2: number = 20;
  myBoolean: boolean = true;

  parentVar1: string = "Parent data 1";
  parentVar2: string = "Parent data 2";


  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('ProductListComponent view initialized');
    console.log("this.myDivElement: ", this.myDivElement);

    this.myDivElement!.nativeElement.style.color = 'red';
    this.myDivElement!.nativeElement.style.backgroundColor = 'yellow';

  }

  onMyEmmiter(num1: number, data: number, num2: number) {
    console.log('Received from child emitter: ' + data);
  }

  onValueChanged(data: string) {
    console.log('Received from child: ' + data);
  }

  onDivClick(myClickEventData : any) {
    console.log('Div clicked',  myClickEventData);
  }

  onHover(myHoverEventData : any) {
    console.log('Mouse hovered',  myHoverEventData);
  }

}
