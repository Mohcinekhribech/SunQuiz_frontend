import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMediaFormComponent } from './update-media-form.component';

describe('UpdateMediaFormComponent', () => {
  let component: UpdateMediaFormComponent;
  let fixture: ComponentFixture<UpdateMediaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMediaFormComponent]
    });
    fixture = TestBed.createComponent(UpdateMediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
