import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormattorToolComponent } from './json-formattor-tool.component';

describe('JsonFormattorToolComponent', () => {
  let component: JsonFormattorToolComponent;
  let fixture: ComponentFixture<JsonFormattorToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonFormattorToolComponent]
    });
    fixture = TestBed.createComponent(JsonFormattorToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
