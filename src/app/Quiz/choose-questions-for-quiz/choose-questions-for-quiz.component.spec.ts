import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuestionsForQuizComponent } from './choose-questions-for-quiz.component';

describe('ChooseQuestionsForQuizComponent', () => {
  let component: ChooseQuestionsForQuizComponent;
  let fixture: ComponentFixture<ChooseQuestionsForQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseQuestionsForQuizComponent]
    });
    fixture = TestBed.createComponent(ChooseQuestionsForQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
