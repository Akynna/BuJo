import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingTestPage } from './drawingTest.page';

describe('DrawingTestPage', () => {
  let component: DrawingTestPage;
  let fixture: ComponentFixture<DrawingTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
