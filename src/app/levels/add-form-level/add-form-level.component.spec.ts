import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormLevelComponent } from './add-form-level.component';

describe('AddFormLevelComponent', () => {
  let component: AddFormLevelComponent;
  let fixture: ComponentFixture<AddFormLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFormLevelComponent]
    });
    fixture = TestBed.createComponent(AddFormLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
