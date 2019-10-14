import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysignupPage } from './companysignup.page';

describe('CompanysignupPage', () => {
  let component: CompanysignupPage;
  let fixture: ComponentFixture<CompanysignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanysignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
