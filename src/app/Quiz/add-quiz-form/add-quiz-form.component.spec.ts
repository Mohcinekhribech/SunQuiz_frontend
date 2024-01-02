import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizFormComponent } from './add-quiz-form.component';

describe('AddQuizFormComponent', () => {
  let component: AddQuizFormComponent;
  let fixture: ComponentFixture<AddQuizFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddQuizFormComponent]
    });
    fixture = TestBed.createComponent(AddQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
