import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenColorDetailsComponent } from './green-color-details.component';

describe('GreenColorDetailsComponent', () => {
  let component: GreenColorDetailsComponent;
  let fixture: ComponentFixture<GreenColorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenColorDetailsComponent]
    });
    fixture = TestBed.createComponent(GreenColorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
