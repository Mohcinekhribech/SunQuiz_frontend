import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSubjectForQuestionComponent } from './choose-subject-for-question.component';

describe('ChooseSubjectForQuestionComponent', () => {
  let component: ChooseSubjectForQuestionComponent;
  let fixture: ComponentFixture<ChooseSubjectForQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseSubjectForQuestionComponent]
    });
    fixture = TestBed.createComponent(ChooseSubjectForQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
