import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsHomePageComponent } from './tools-home-page.component';

describe('ToolsHomePageComponent', () => {
  let component: ToolsHomePageComponent;
  let fixture: ComponentFixture<ToolsHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsHomePageComponent]
    });
    fixture = TestBed.createComponent(ToolsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
