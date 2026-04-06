import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousExamplesComponent } from './asynchronous-examples.component';

describe('AsynchronousExamplesComponent', () => {
  let component: AsynchronousExamplesComponent;
  let fixture: ComponentFixture<AsynchronousExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
