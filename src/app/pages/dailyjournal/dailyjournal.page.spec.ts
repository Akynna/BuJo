import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyjournalPage } from './dailyjournal.page';

describe('DailyjournalPage', () => {
  let component: DailyjournalPage;
  let fixture: ComponentFixture<DailyjournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyjournalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyjournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
