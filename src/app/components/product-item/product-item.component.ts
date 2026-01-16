import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

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
  @Input() parentData1: any = '';
  @Input() parentData2: string = '';

  // How to pass data child to parent using @Output decorator
  // We can create a property(ex-valueChanged) and decorate it with @Output decorator and then use the same property(ex-valueChanged) on the selector tag of the child component in the HTML file of the parent component using the event binding syntax((valueChanged)="onValueChanged($event)") like below
  // <app-product-item (valueChanged)="onValueChanged($event)"></app-product-item>
  // Here onValueChanged is a method of the parent component which will be called when the data is emitted from the child component
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output() myEmmiter: EventEmitter<number> = new EventEmitter<number>();

  // **********************************************************************************************************

  // We can use @ContentChild decorator to get reference of an html element which is projected inside the current component from its parent. 
  // ContentChild will look for the first occurrence of the html element having the reference variable(info) from the projected content and will store its reference inside the myPElement property
  @ContentChild('info') myPElement : ElementRef<HTMLParagraphElement> | undefined;

  // We can also use @ContentChild decorator to get reference of a component which is projected inside the current component from the parent component.
  // ContentChild will look for the first occurrence of the BadgeComponent from the projected content having the reference variable(badge) and will store its reference inside the badgeElement property
  @ContentChild('badge') badgeElement : BadgeComponent | undefined;

  // ***********************************************************************************************************
  // We can use @ContentChildren decorator to get reference of multiple html elements which are projected inside the current component from its parent.
  // ContentChildren will look for all the occurrences of the html elements having the reference variable(gulabjamun) from the projected content and will store their references inside the gulabjamunElements property as an object of QueryList
  @ContentChildren('gulabjamun') gulabjamunElements : QueryList<ElementRef<HTMLElement>> | undefined;


  // **********************************************************************************************************
  // We can use @ContentChildren decorator to get reference of multiple component instances which are projected inside the current component from its parent.
  // ContentChildren will look for all the occurrences of the BadgeComponent from the projected content having the reference variable(sweetBadge) and will store their references inside the sweetBadgeElements property as an object of QueryList
  @ContentChildren('sweetBadge') sweetBadgeElements : QueryList<BadgeComponent> | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.parentData1);
    console.log(this.parentData2);

    this.myEmmiter.emit(55);
  }

  ngAfterContentInit(): void {

    // @ContentChild to access projected html paragraph element and modify its styles and text
    console.log("myPElement : ",this.myPElement);
    this.myPElement!.nativeElement.style.color = 'green';
    this.myPElement!.nativeElement.style.fontWeight = 'bold';
    this.myPElement!.nativeElement.style.backgroundColor = 'yellow';
    this.myPElement!.nativeElement.innerText = 'Text modified using @ContentChild decorator';

    // @ContentChild to access projected badgeComponent instance and modify its properties 
    console.log("badgeElement : ",this.badgeElement);
    this.badgeElement!.badgeColor = 'blue';
    this.badgeElement!.badgeText = 'dog';

    // @ContentChildren to access projected multiple html elements and modify their styles
    console.log("gulabjamunElements : ",this.gulabjamunElements);
    this.gulabjamunElements!.forEach(
      (gulabjamunElement: ElementRef, index: number) => {
        // gulabjamunElement is of type ElementRef
        // gulabjamunElement.nativeElement is the actual HTML element
        // thus gulabjamunElement.nativeElement can be used to change style(width height color etc), add event listeners, change its content(innerHTML, innerText) etc.
        gulabjamunElement.nativeElement.style.color = index % 2 == 0 ? 'red' : 'blue';
        gulabjamunElement.nativeElement.style.fontWeight = 'bold';
      }
    );

    // @ContentChildren to access projected multiple badgeComponent instances and modify their properties
    console.log("sweetBadgeElements : ",this.sweetBadgeElements);
    this.sweetBadgeElements!.forEach(
      (sweetBadgeElement: BadgeComponent, index: number) => {
        // sweetBadgeElement is of type BadgeComponent
        sweetBadgeElement.badgeColor = index % 2 == 0 ? 'purple' : 'orange';
        sweetBadgeElement.badgeText = index % 2 == 0 ? 'cat' : 'rabbit';
      }
    );
  }

  onClick() {
    this.valueChanged.emit('Data from child component');
  }

}
