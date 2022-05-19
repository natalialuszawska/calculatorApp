import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodPressureComponent } from './blood-pressure/blood-pressure.component';
import { BmiComponent } from './bmi/bmi.component';
import { BodyShapeComponent } from './body-shape/body-shape.component';
import { Covid19Component } from './covid19/covid19.component';
import { CukierComponent } from './cukier/cukier.component';
import { DoseComponent } from './dose/dose.component';
import { InsulinComponent } from './insulin/insulin.component';
import { KcalreqComponent } from './kcalreq/kcalreq.component';
import { TitleTabComponent } from './title-tab/title-tab.component';
import { Type2DiabetesComponent } from './type2-diabetes/type2-diabetes.component';
import { WaterComponent } from './water/water.component';
import { CalculatorComponent } from './calculator/calculator.component';
const routes: Routes = [
  { path: '', component: TitleTabComponent},
  { path: 'bmi', component: BmiComponent},
  { path: 'kcalreq', component: KcalreqComponent},
  { path: 'water', component: WaterComponent},
  { path: 'cukier', component: CukierComponent},
  { path: 'type2-diabetes', component: Type2DiabetesComponent},
  { path: 'blood-pressure', component: BloodPressureComponent},
  { path: 'body-shape', component:BodyShapeComponent},
  { path: 'insulin', component:InsulinComponent},
  { path: 'covid19', component:Covid19Component},
  { path: 'dose', component:DoseComponent},
  {path:'calculator',component:CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
