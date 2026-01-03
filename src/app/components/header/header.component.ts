import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle: string = "Foodie's Paradise";

  navItems: string[] = ["Home", "About", "Services", "Contact"];

  showNavMenu: boolean = true;

  constructor() {
    console.log("Header component constructor called.");
  }

  ngOnInit(): void {
    console.log("Header component initialized, ngOnInit called.");
    this.appTitle = "Xoraano";
  }

}
