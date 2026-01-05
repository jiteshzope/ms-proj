import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  // A decorator function is prefixed with @ symbol

  // We can pass data from parent component to child component using @Input decorator function
  // we can create a property(ex-parentData1) and decorate it with @Input decorator and then use the same property(ex-parentData1) on the selector tag of the child component in the HTML file of the parent component using the property binding syntax([parentData1]="parentVar1") like below
  // <app-product-item [parentData1]="parentVar1"></app-product-item>
  // Here parentVar1 is a property of the parent component which holds the data to be passed to the child component
  @Input() parentData1: string = '';
  @Input() parentData2: string = '';

  // How to pass data child to parent using @Output decorator
  // We can create a property(ex-valueChanged) and decorate it with @Output decorator and then use the same property(ex-valueChanged) on the selector tag of the child component in the HTML file of the parent component using the event binding syntax((valueChanged)="onValueChanged($event)") like below
  // <app-product-item (valueChanged)="onValueChanged($event)"></app-product-item>
  // Here onValueChanged is a method of the parent component which will be called when the data is emitted from the child component
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.parentData1);
    console.log(this.parentData2);
  }

  onClick() {
    this.valueChanged.emit('Data from child component');
  }

}
