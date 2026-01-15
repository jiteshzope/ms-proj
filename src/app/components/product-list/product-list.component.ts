import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

// Generic class
// we can also make a class generic by using angle brackets <> after the class name and specifying the type inside it
class Product<T>{
  name: T;
  price: number = 1000;
  age?: number; // optional property
  
  constructor(name: T, price: number){
    this.name = name;
    this.price = price;
  }
}

// We can use class name as well for type inference
// creating an object of type Product and inferring the type using class name Product
// here we are specifying the type of generic type T as string
// thus product1 is of type Product of generic type string
let product1 : Product<string> = new Product('Mobile', 1000);

interface IProduct{
  name: string;
  price: number | string;
  length?: number; // optional property
}

// we can use interface to define the structure of an object
// creating an object of type IProduct
// we can tell typescript compiler about the type of variable by using colon (:) followed by the type name
// :IProduct is called as type inference, means we are telling/inferring typescript compiler that the variable product is of type IProduct
let product: IProduct;

product = {
  name: 'Laptop',
  price: 50000,
  length: 10,
};

// Generic interface
// we can make an interface generic by using angle brackets <> after the interface name and specifying the type inside it
// then we can use that generic type inside for the interface properties
interface ICategory<T>{
  name: string;
  price: T;
  length?: number; // optional property
}

let category: ICategory<string | number>;

category = {
  name: 'Electronics',
  price: '10',
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // here we are decorating the myDivElement property with @ViewChild decorator to get reference of the div element
  // initially when the component is just created, the value inside the myDivElement property will be undefined, After sometime ViewChild decorator will store/populate the object/instance/reference of html element into it
  // @ViewChild('myDiv') myDivElement : ElementRef<any> | undefined; // myDivElement of type ElementRef of generic type any or undefined

  // We can use @ViewChild decorator to get reference/instance/object of a child component
  // we can use that instance to access the properties and methods of that child component
  // we can change the values of the properties of that child component and call its methods from the parent component
  @ViewChild('productItem') productItemElement : ProductItemComponent | undefined;

  // we can decorate a property with @ViewChildren decorator to get reference of multiple html elements having the same reference variable
  // initially when the component is just created, the value inside the myAddressElements property will be undefined, After sometime ViewChildren decorator will populate myAddressElements with an object of type QueryList which contains objects of all the html elements having the reference variable(address).
  // @ViewChildren('address') myAddressElements : QueryList<ElementRef<HTMLParagraphElement>> | undefined;

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
    // console.log('product: ', product);
    // console.log('category: ', category);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('ProductListComponent view initialized');


    // ViewChild *************************************************************************************************************
    // console.log("this.myDivElement: ", this.myDivElement);
    // this.myDivElement!.nativeElement.style.color = 'red';
    // this.myDivElement!.nativeElement.style.backgroundColor = 'yellow';

    // ViewChildren ********************************************************************************************************
    // console.log("this.myAddressElements: ", this.myAddressElements);
    
    // we can use forEach loop on the QueryList to access each html element in the form of ElementRef, then we can access the nativeElement property of ElementRef which is the object of the actual HTML element, which can be used to change style(width height color etc), add event listeners, change its content(innerHTML, innerText) etc.
    // Accessing the elements using forEach loop, because myAddressElements is of type QueryList and QueryList has forEach() method
    // this.myAddressElements!.forEach(
    //   (addressElement: ElementRef, index: number) => {
    //     // addressElement is of type ElementRef
    //     // addressElement.nativeElement is the actual HTML element
    //     // thus addressElement.nativeElement can be used to change style(width height color etc), add event listeners, change its content(innerHTML, innerText) etc.
    //     if(index % 2 == 0)
    //       addressElement.nativeElement.style.color = 'blue';
    //     else
    //       addressElement.nativeElement.style.color = 'green';
    //   }
    // );

    // *********************************************************************************************************************************

    // ViewChild to access child component instance and modify its properties and call its methods from the parent component
    console.log("this.productItemElement: ", this.productItemElement);
    this.productItemElement!.parentData1 = "Data set from parent using ViewChild";
    this.productItemElement!.parentData2 = "Another data set from parent using ViewChild";
    this.productItemElement!.onClick();

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
