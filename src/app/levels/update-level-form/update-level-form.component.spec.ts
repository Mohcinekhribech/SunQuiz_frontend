import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLevelFormComponent } from './update-level-form.component';

describe('UpdateLevelFormComponent', () => {
  let component: UpdateLevelFormComponent;
  let fixture: ComponentFixture<UpdateLevelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLevelFormComponent]
    });
    fixture = TestBed.createComponent(UpdateLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
