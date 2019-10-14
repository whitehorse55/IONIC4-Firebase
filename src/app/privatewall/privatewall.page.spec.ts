import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatewallPage } from './privatewall.page';

describe('PrivatewallPage', () => {
  let component: PrivatewallPage;
  let fixture: ComponentFixture<PrivatewallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatewallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatewallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
