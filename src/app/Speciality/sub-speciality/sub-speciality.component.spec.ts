/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubSpecialityComponent } from './sub-speciality.component';

describe('SubSpecialityComponent', () => {
  let component: SubSpecialityComponent;
  let fixture: ComponentFixture<SubSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
