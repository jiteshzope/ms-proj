
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface UserFormModel {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
  };
  accountInfo: {
    username: string;
    password: string;
    age: number | null;
  };
  preferences: {
    gender: string;
    country: string;
    newsletter: boolean;
    skills: {
      angular: boolean;
      typescript: boolean;
      node: boolean;
      testing: boolean;
    };
  };
  address: {
    city: string;
    zipCode: string;
  };
  about: string;
  termsAccepted: boolean;
}

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.css']
})
export class TemplateDrivenFormExampleComponent {
  countries: string[] = ['India', 'Germany', 'Netherlands', 'USA', 'Canada'];

  user: UserFormModel = this.getInitialFormData();

  get skillsInvalid(): boolean {
    const skills = this.user.preferences.skills;
    return !Object.values(skills).some(value => value);
  }

  getInitialFormData(): UserFormModel {
    return {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        dob: ''
      },
      accountInfo: {
        username: '',
        password: '',
        age: null
      },
      preferences: {
        gender: '',
        country: '',
        newsletter: false,
        skills: {
          angular: false,
          typescript: false,
          node: false,
          testing: false
        }
      },
      address: {
        city: '',
        zipCode: ''
      },
      about: '',
      termsAccepted: false
    };
  }

  onSkillChange(
    skillName: 'angular' | 'typescript' | 'node' | 'testing',
    checked: boolean
  ): void {
    this.user.preferences.skills[skillName] = checked;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || this.skillsInvalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log('Form Submitted Successfully');
    console.log('Template Form Value:', form.value);
    console.log('Bound Model:', this.user);

    // API call can go here
  }

  resetForm(form: NgForm): void {
    this.user = this.getInitialFormData();
    form.resetForm(this.user);
  }
}
