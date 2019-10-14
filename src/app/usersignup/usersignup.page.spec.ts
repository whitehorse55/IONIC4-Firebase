import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignupPage } from './usersignup.page';

describe('UsersignupPage', () => {
  let component: UsersignupPage;
  let fixture: ComponentFixture<UsersignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
