import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLevelFormComponent } from './add-level-form.component';

describe('AddLevelFormComponent', () => {
  let component: AddLevelFormComponent;
  let fixture: ComponentFixture<AddLevelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLevelFormComponent]
    });
    fixture = TestBed.createComponent(AddLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
