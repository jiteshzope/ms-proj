import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    // console.log("Header component constructor called.");
  }

  ngOnInit(): void {
    // console.log("Header component initialized, ngOnInit called.");
    this.appTitle1 = "Xoraano";
  }

  gotoProducts() {
    // we can use router.navigate method to navigate to a route programmatically
    // this.router.navigate(['/products'], {queryParams: {sort: 'asc', page: 1 }});
    this.router.navigate(['/products', 'hygiene', 15], {queryParams: {sort: 'asc', page: 1 }});
  }

}
