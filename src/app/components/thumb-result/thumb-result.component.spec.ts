import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbResultComponent } from './thumb-result.component';

describe('ThumbResultComponent', () => {
  let component: ThumbResultComponent;
  let fixture: ComponentFixture<ThumbResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbResultComponent]
    });
    fixture = TestBed.createComponent(ThumbResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
