import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssButtonGeneratorPageComponent } from './css-button-generator-page.component';

describe('CssButtonGeneratorPageComponent', () => {
  let component: CssButtonGeneratorPageComponent;
  let fixture: ComponentFixture<CssButtonGeneratorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssButtonGeneratorPageComponent]
    });
    fixture = TestBed.createComponent(CssButtonGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
