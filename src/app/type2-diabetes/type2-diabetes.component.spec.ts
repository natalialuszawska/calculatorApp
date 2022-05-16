import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2DiabetesComponent } from './type2-diabetes.component';

describe('Type2DiabetesComponent', () => {
  let component: Type2DiabetesComponent;
  let fixture: ComponentFixture<Type2DiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type2DiabetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Type2DiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
