import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectFormComponent } from './add-subject-form.component';

describe('AddSubjectFormComponent', () => {
  let component: AddSubjectFormComponent;
  let fixture: ComponentFixture<AddSubjectFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubjectFormComponent]
    });
    fixture = TestBed.createComponent(AddSubjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
