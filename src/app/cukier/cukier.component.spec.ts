import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CukierComponent } from './cukier.component';

describe('CukierComponent', () => {
  let component: CukierComponent;
  let fixture: ComponentFixture<CukierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CukierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CukierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
