import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showTitle1 : boolean = false;
  showHelperText1 : boolean = false;

  appTitle1: string = "Foodie's Paradise";

  navItems: string[] = ["Home", "About", "Services", "Contact"];

  showNavMenu: boolean = true;

  shopingList = [
    { type: 'garments', value: 'Collor shirt' },
    { type: 'disposables', value: 'Paper cups' },
    { type: 'unknown', value: '???' }
  ];

  constructor() {
    console.log("Header component constructor called.");
  }

  ngOnInit(): void {
    console.log("Header component initialized, ngOnInit called.");
    this.appTitle1 = "Xoraano";
  }

}
