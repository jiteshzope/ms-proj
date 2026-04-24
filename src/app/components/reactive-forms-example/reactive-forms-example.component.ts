import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html'
})
export class ReactiveFormsExampleComponent {
  submitted = false;

  profileForm: FormGroup = this.fb.group({
    // one FormControl at root level
    searchKeyword: ['', [Validators.required, Validators.minLength(3)]],

    // FormGroup
    personalInfo: this.fb.group({
      fullName: ['', [Validators.required, this.noSpaceOnlyValidator]],
      email: [
        '',
        [Validators.required, Validators.email],
        [this.blockedEmailValidator()]
      ],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      gender: ['', Validators.required]
    }),

    // another FormGroup
    preferences: this.fb.group({
      country: ['', Validators.required],
      bio: ['', [Validators.required, this.forbiddenWordValidator(/admin|root/i)]],
      acceptTerms: [false, Validators.requiredTrue]
    }),

    // FormArray
    skills: this.fb.array([
      this.createSkillControl()
    ])
  });

  constructor(private fb: FormBuilder) {}

  // custom sync validator 1
  noSpaceOnlyValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value == null) return null;
    return value.toString().trim().length === 0 ? { spaceOnly: true } : null;
  }

  // custom sync validator 2
  forbiddenWordValidator(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      return pattern.test(value) ? { forbiddenWord: true } : null;
    };
  }

  // async validator
  blockedEmailValidator(): AsyncValidatorFn {
    const blockedEmails = ['test@test.com', 'admin@gmail.com', 'blocked@mail.com'];

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const value = control.value;

      if (!value) {
        return of(null);
      }

      return of(blockedEmails.includes(value.toLowerCase())).pipe(
        delay(800),
        map((isBlocked: boolean) => (isBlocked ? { blockedEmail: true } : null))
      );
    };
  }

  createSkillControl(): FormControl {
    return this.fb.control('', [Validators.required, Validators.minLength(2)]);
  }

  get personalInfo(): FormGroup {
    return this.profileForm.get('personalInfo') as FormGroup;
  }

  get preferences(): FormGroup {
    return this.profileForm.get('preferences') as FormGroup;
  }

  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.createSkillControl());
  }

  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    console.log('Submitted value:', this.profileForm.value);
  }

  patchDemoData(): void {
    this.profileForm.patchValue({
      searchKeyword: 'Angular',
      personalInfo: {
        fullName: 'Jitesh Zope',
        email: 'jitesh@example.com',
        age: 28,
        gender: 'male'
      },
      preferences: {
        country: 'Germany',
        bio: 'Frontend developer working with Angular',
        acceptTerms: true
      }
    });

    while (this.skills.length > 1) {
      this.skills.removeAt(this.skills.length - 1);
    }

    this.skills.at(0).setValue('Angular');
    this.skills.push(this.createSkillControl());
    this.skills.at(1).setValue('TypeScript');
  }

  resetForm(): void {
    this.submitted = false;
    this.profileForm.reset();

    this.preferences.get('acceptTerms')?.setValue(false);

    while (this.skills.length > 1) {
      this.skills.removeAt(this.skills.length - 1);
    }

    this.skills.at(0).reset();
  }
}