import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcalreqComponent } from './kcalreq.component';

describe('KcalreqComponent', () => {
  let component: KcalreqComponent;
  let fixture: ComponentFixture<KcalreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcalreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
