import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms-learning',
  templateUrl: './template-driven-forms-learning.component.html',
  styleUrls: ['./template-driven-forms-learning.component.css']
})
export class TemplateDrivenFormsLearningComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm) {
    console.log("myForm : ",myForm); // NgForm instance associated with the form element
    // console.log("myForm.form : ",myForm.form); // FormGroup instance associated with the entire form

    // console.log("myForm.value : ",myForm.value);
    // console.log("myForm.form.value : ",myForm.form.value);

    // subscribe to valueChanges and statusChanges of form controls
    myForm.form.controls['firstname'].valueChanges?.subscribe(value => {
      console.log("First Name value changed to : ", value);
    });
    myForm.form.controls['firstname'].statusChanges?.subscribe(status => {
      console.log("First Name status changed to : ", status);
    });

    // subscribe to valueChanges and statusChanges of the entire form
    myForm.form.valueChanges?.subscribe(value => {
      console.log("Form value changed to : ", value);
    });
    myForm.form.statusChanges?.subscribe(status => {
      console.log("Form status changed to : ", status);
    });
    
  }

}
