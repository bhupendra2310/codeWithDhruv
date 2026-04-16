import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedColorDetailsComponent } from './red-color-details.component';

describe('RedColorDetailsComponent', () => {
  let component: RedColorDetailsComponent;
  let fixture: ComponentFixture<RedColorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedColorDetailsComponent]
    });
    fixture = TestBed.createComponent(RedColorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
