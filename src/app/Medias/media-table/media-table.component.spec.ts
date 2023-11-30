import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTableComponent } from './media-table.component';

describe('MediaTableComponent', () => {
  let component: MediaTableComponent;
  let fixture: ComponentFixture<MediaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaTableComponent]
    });
    fixture = TestBed.createComponent(MediaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
