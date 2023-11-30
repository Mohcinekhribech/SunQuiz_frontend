import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediaFormComponent } from './add-media-form.component';

describe('AddMediaFormComponent', () => {
  let component: AddMediaFormComponent;
  let fixture: ComponentFixture<AddMediaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMediaFormComponent]
    });
    fixture = TestBed.createComponent(AddMediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
