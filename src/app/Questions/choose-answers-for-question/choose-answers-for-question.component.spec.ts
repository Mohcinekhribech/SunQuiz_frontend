import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAnswersForQuestionComponent } from './choose-answers-for-question.component';

describe('ChooseAnswersForQuestionComponent', () => {
  let component: ChooseAnswersForQuestionComponent;
  let fixture: ComponentFixture<ChooseAnswersForQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseAnswersForQuestionComponent]
    });
    fixture = TestBed.createComponent(ChooseAnswersForQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
