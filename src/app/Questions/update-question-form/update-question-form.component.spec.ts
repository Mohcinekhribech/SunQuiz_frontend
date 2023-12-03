import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionFormComponent } from './update-question-form.component';

describe('UpdateQuestionFormComponent', () => {
  let component: UpdateQuestionFormComponent;
  let fixture: ComponentFixture<UpdateQuestionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateQuestionFormComponent]
    });
    fixture = TestBed.createComponent(UpdateQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
