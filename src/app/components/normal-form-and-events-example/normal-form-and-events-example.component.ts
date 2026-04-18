import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-form-and-events-example',
  templateUrl: './normal-form-and-events-example.component.html',
  styleUrls: ['./normal-form-and-events-example.component.css']
})
export class NormalFormAndEventsExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNameEnter(event: any): void {
    console.log("onNameEnter : event :", event);
    console.log("onNameEnter : event.type is : ", event.type);
    console.log("onNameEnter : event.target is : ", event.target);
    console.log("onNameEnter : current text in name input element is : ", event.target.value);
    console.log("onNameEnter : color of the name input element is : ", event.target.style.color);
  }

  onEmailEnter(event: any): void {
    console.log("onEmailEnter : current text in email input element is : ", event.target.value);
  }

  onPasswordEnter(event: any): void {
    console.log("onPasswordEnter : current text in password input element is : ", event.target.value);
  }

  onMouseEnter(event: any): void {
    console.log('onMouseEnter : Mouse entered the description field');
    event.target.style.backgroundColor = 'lightblue';
  }
  
  onMouseLeave(event: any): void {
    console.log('onMouseLeave : Mouse left the description field');
    event.target.style.backgroundColor = 'white';
  }

  submitClicked(): void {
    console.log('submitClicked : Submit button clicked');
  }

}
