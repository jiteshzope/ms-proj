import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, ContentChild, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

  @Input() infoData: string = '';
  @Input() infoDetails: { name : string, age: number } | undefined;

  @ContentChild('infoContent') infoContent : ElementRef<HTMLElement> | undefined;

  @ViewChild('waladiv') waladiv : ElementRef<HTMLElement> | undefined;

  // constructor is not a lifecycle hook, it is a special method that is called when an instance of the class is created
  constructor() { 
    console.log("InformationComponent : constructor");
  }

  // ngOnChanges is a lifecycle hook that is called during the first change detection cycle, when all the bound input properties are populated with the values from the parent component
  // and it is called every time whenever the value of any of the bound input property changes
  ngOnChanges(changes: SimpleChanges){
    console.log("InformationComponent : ngOnChanges, changes : ", changes);
    // console.log("InformationComponent : ngOnChanges changes['infoData'].currentValue : ", changes['infoData'].currentValue);
    // console.log("InformationComponent : ngOnChanges changes['infoData'].previousValue : ", changes['infoData'].previousValue);
  }

  // ngOnInit is a lifecycle hook which is called only once during the first change detection cycle after ngOnChanges hook
  // this hook is mainly used to perform operations such as fetching data from the server, performing calculations by making use of that fetched data and any of input properties, initializing component properties with those calculated values, etc.
  ngOnInit(){
    console.log("InformationComponent : ngOnInit");
  }

  // ngDoCheck is a lifecycle hook that is called during every change detection cycle
  // this hook is mainly used to detect and act upon changes that Angular can't detect on its own
  ngDoCheck(){
    console.log("InformationComponent : ngDoCheck");
  }

  // ngAfterContentInit is a lifecycle hook that is called by angular after the projected content at the place marked by <ng-content> tags is initialized
  // Here we can access the projected content using @ContentChild or @ContentChildren decorators
  // This hook is called only once during the first change detection cycle
  ngAfterContentInit(){
    console.log("this.infoContent: ", this.infoContent);
    console.log("InformationComponent : ngAfterContentInit");
  }

  // ngAfterContentChecked is a lifecycle hook that is called during every change detection cycle if there is any change in the projected content
  ngAfterContentChecked(){
    console.log("this.infoContent: ", this.infoContent);
    console.log("InformationComponent : ngAfterContentChecked");
  }

  // ngAfterViewInit is a lifecycle hook that is called by angular after the component's view and the views of all of its child components are initialized
  // This hook is called only once during the first change detection cycle
  ngAfterViewInit(){
    console.log("this.waladiv: ", this.waladiv);
    console.log("InformationComponent : ngAfterViewInit");
  }

  // ngAfterViewChecked is a lifecycle hook that is called during every change detection cycle if there is any change in the component's view or in the views of its child components
  // this hook is mainly used to perform operations that need to be done after the view is updated
  ngAfterViewChecked(){
    console.log("this.waladiv: ", this.waladiv);
    console.log("InformationComponent : ngAfterViewChecked");
  }

  // ngOnDestroy is a lifecycle hook that is called just before the component is destroyed
  // this hook is mainly used to perform cleanup operations such as unsubscribing from observables, detaching event handlers etc to avoid memory leaks
  ngOnDestroy(){
    console.log("InformationComponent : ngOnDestroy");
  }

}
