import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorShadesDetailsPageComponent } from './color-shades-details-page.component';

describe('ColorShadesDetailsPageComponent', () => {
  let component: ColorShadesDetailsPageComponent;
  let fixture: ComponentFixture<ColorShadesDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorShadesDetailsPageComponent]
    });
    fixture = TestBed.createComponent(ColorShadesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
