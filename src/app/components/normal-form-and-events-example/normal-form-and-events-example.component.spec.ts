import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalFormAndEventsExampleComponent } from './normal-form-and-events-example.component';

describe('NormalFormAndEventsExampleComponent', () => {
  let component: NormalFormAndEventsExampleComponent;
  let fixture: ComponentFixture<NormalFormAndEventsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalFormAndEventsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalFormAndEventsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
