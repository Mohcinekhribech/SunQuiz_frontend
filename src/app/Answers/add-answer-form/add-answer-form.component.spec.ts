import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerFormComponent } from './add-answer-form.component';

describe('AddAnswerFormComponent', () => {
  let component: AddAnswerFormComponent;
  let fixture: ComponentFixture<AddAnswerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnswerFormComponent]
    });
    fixture = TestBed.createComponent(AddAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
