import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms-learning',
  templateUrl: './template-driven-forms-learning.component.html',
  styleUrls: ['./template-driven-forms-learning.component.css']
})
export class TemplateDrivenFormsLearningComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  formModel = {
    firstname: '',
    lastname: '',
    email: '',
    address: {
      city: '',
      state: '',
    }
  };
  
  constructor() { }
  
  ngOnInit(): void {
    // subscribe to valueChanges and statusChanges of form controls
    this.myForm.form.controls['firstname'].valueChanges?.subscribe(value => {
      console.log("First Name value changed to : ", value);
    });
    this.myForm.form.controls['firstname'].statusChanges?.subscribe(status => {
      console.log("First Name status changed to : ", status);
    });

    // subscribe to valueChanges and statusChanges of the entire form
    this.myForm.form.valueChanges?.subscribe(value => {
      console.log("Form value changed to : ", value);
    });
    this.myForm.form.statusChanges?.subscribe(status => {
      console.log("Form status changed to : ", status);
    });

  }

  ngAfterViewInit() {
    this.formModel.address.city = "New York";

    this.myForm.setValue({
      firstname: "John",
      lastname: "Doe",
      email: "",
      address: {
        city: "New York",
        state: "",
      }
    });
  }

  onSubmit(ngForm: NgForm) {
    console.log("ngForm : ",ngForm); // NgForm instance associated with the form element
    // console.log("ngForm.form : ",ngForm.form); // FormGroup instance associated with the entire form

    // console.log("ngForm.value : ",ngForm.value);
    // console.log("ngForm.form.value : ",ngForm.form.value);
    
  }

}
