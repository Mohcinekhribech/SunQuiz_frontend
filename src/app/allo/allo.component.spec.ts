import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloComponent } from './allo.component';

describe('AlloComponent', () => {
  let component: AlloComponent;
  let fixture: ComponentFixture<AlloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlloComponent]
    });
    fixture = TestBed.createComponent(AlloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
