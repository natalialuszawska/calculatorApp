import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dose2Component } from './dose2.component';

describe('Dose2Component', () => {
  let component: Dose2Component;
  let fixture: ComponentFixture<Dose2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dose2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dose2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
