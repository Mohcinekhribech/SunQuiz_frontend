import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingQuizComponent } from './passing-quiz.component';

describe('PassingQuizComponent', () => {
  let component: PassingQuizComponent;
  let fixture: ComponentFixture<PassingQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassingQuizComponent]
    });
    fixture = TestBed.createComponent(PassingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
