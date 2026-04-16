import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkColorDetailsComponent } from './pink-color-details.component';

describe('PinkColorDetailsComponent', () => {
  let component: PinkColorDetailsComponent;
  let fixture: ComponentFixture<PinkColorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinkColorDetailsComponent]
    });
    fixture = TestBed.createComponent(PinkColorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
