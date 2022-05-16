import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiComponent } from './bmi/bmi.component';
import { TitleTabComponent } from './title-tab/title-tab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CukierComponent } from './cukier/cukier.component';
import { WaterComponent } from './water/water.component';
import { KcalreqComponent } from './kcalreq/kcalreq.component';
import { Type2DiabetesComponent } from './type2-diabetes/type2-diabetes.component';
import { BodyShapeComponent } from './body-shape/body-shape.component';
import { BloodPressureComponent } from './blood-pressure/blood-pressure.component';
import { InsulinComponent } from './insulin/insulin.component';
import { DoseComponent } from './dose/dose.component';
import { Covid19Component } from './covid19/covid19.component';
import { Dose2Component } from './dose2/dose2.component';
@NgModule({
  declarations: [
    AppComponent,
    BmiComponent,
    TitleTabComponent,
    NavbarComponent,
    CukierComponent,
    WaterComponent,
    KcalreqComponent,
    Type2DiabetesComponent,
    BodyShapeComponent,
    BloodPressureComponent,
    InsulinComponent,
    DoseComponent,
    Covid19Component,
    Dose2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
