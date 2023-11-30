import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnswerFormComponent } from './update-answer-form.component';

describe('UpdateAnswerFormComponent', () => {
  let component: UpdateAnswerFormComponent;
  let fixture: ComponentFixture<UpdateAnswerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAnswerFormComponent]
    });
    fixture = TestBed.createComponent(UpdateAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
