import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxRadiusGeneratorPageComponent } from './box-radius-generator-page.component';

describe('BoxRadiusGeneratorPageComponent', () => {
  let component: BoxRadiusGeneratorPageComponent;
  let fixture: ComponentFixture<BoxRadiusGeneratorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxRadiusGeneratorPageComponent]
    });
    fixture = TestBed.createComponent(BoxRadiusGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
