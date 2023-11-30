import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubjectFormComponent } from './update-subject-form.component';

describe('UpdateSubjectFormComponent', () => {
  let component: UpdateSubjectFormComponent;
  let fixture: ComponentFixture<UpdateSubjectFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSubjectFormComponent]
    });
    fixture = TestBed.createComponent(UpdateSubjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
