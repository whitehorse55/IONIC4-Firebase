import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoffersPage } from './newoffers.page';

describe('NewoffersPage', () => {
  let component: NewoffersPage;
  let fixture: ComponentFixture<NewoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoffersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
