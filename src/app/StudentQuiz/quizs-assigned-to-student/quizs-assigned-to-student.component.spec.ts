import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsAssignedToStudentComponent } from './quizs-assigned-to-student.component';

describe('QuizsAssignedToStudentComponent', () => {
  let component: QuizsAssignedToStudentComponent;
  let fixture: ComponentFixture<QuizsAssignedToStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizsAssignedToStudentComponent]
    });
    fixture = TestBed.createComponent(QuizsAssignedToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
