import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMediaForQuestionComponent } from './choose-media-for-question.component';

describe('ChooseMediaForQuestionComponent', () => {
  let component: ChooseMediaForQuestionComponent;
  let fixture: ComponentFixture<ChooseMediaForQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseMediaForQuestionComponent]
    });
    fixture = TestBed.createComponent(ChooseMediaForQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
