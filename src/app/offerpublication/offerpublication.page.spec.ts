import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferpublicationPage } from './offerpublication.page';

describe('OfferpublicationPage', () => {
  let component: OfferpublicationPage;
  let fixture: ComponentFixture<OfferpublicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferpublicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferpublicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
