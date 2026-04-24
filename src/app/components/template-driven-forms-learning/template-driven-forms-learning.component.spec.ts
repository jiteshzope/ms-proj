import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsLearningComponent } from './template-driven-forms-learning.component';

describe('TemplateDrivenFormsLearningComponent', () => {
  let component: TemplateDrivenFormsLearningComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
