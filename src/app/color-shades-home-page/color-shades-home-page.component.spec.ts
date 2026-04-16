import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorShadesHomePageComponent } from './color-shades-home-page.component';

describe('ColorShadesHomePageComponent', () => {
  let component: ColorShadesHomePageComponent;
  let fixture: ComponentFixture<ColorShadesHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorShadesHomePageComponent]
    });
    fixture = TestBed.createComponent(ColorShadesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
