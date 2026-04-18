import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.css']
})
export class TemplateDrivenFormExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitClicked() {
    console.log('Submit button clicked!');
  }

}
