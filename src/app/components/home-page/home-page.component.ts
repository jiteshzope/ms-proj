import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  name: string = "John Doe";

  today: Date = new Date(); // create a Date object
  // a newly created date object contains the current date and time
  // we can change the date and time by passing parameters to the Date constructor
  // for example, to create a date object for January 1, 2020, we can do:
  anotherDate = new Date(2020, 0, 1); // month is 0-indexed

  myObj = {
    name: "Alice",
    age: 30,
    city: "New York"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
