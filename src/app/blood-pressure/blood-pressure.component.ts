import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})
export class BloodPressureComponent implements OnInit {

  results = {} as BloodPrssureObject
  showResult = true;
  constructor() { }

  ngOnInit(): void {
  }

  checkbloodpressure() {


    if (this.checkBloodPreressure(120, 130, 80, 85, this.results)) {
      this.results.bloodprescom = " Blood pressure is correct."
      console.log(" Blood pressure is correct.")
    }
    else if (this.checkBloodPreressure(130, 140, 85, 90, this.results)) {
      this.results.bloodprescom = " Correct high pressure."
      console.log(" Correct high pressure.")

    }
    else if (this.checkBloodPreressure(140, 160, 90, 100, this.results)) {
      this.results.bloodprescom = " First degree hypertension."
      console.log(" First degree hypertension.")
    }
    else if (this.checkBloodPreressure(160, 180, 100, 110, this.results)) {
      this.results.bloodprescom = " Second degree hypertension."
      console.log(" Second degree hypertension.")
    }
    else if (this.results.systolic == 180 && this.results.diastolic == 110) {
      this.results.bloodprescom = " Third degree hypertension."
      console.log(" Third degree hypertension.")
    }
    else if (this.results.systolic > 140 && this.results.diastolic < 90) {
      this.results.bloodprescom = " Isolated systolic hypertension."
      console.log(" Isolated systolic hypertension.")
    }
    //this.results.bloodprescom ="Call 911!"
    console.log("Zgłoś się do lekarza!")
  }

  checkBloodPreressure(systolicDown: number, systolicUp: number, diastolicDown: number, diastolicUp: number, results: BloodPrssureObject) {
    if (results.systolic >= systolicDown && results.systolic <= systolicUp && results.diastolic >= diastolicDown && results.diastolic <= diastolicUp)
      return true;
    return false;
  }


  submitdata() {

    this.checkbloodpressure();

  }
}
export interface BloodPrssureObject {
  bloodpres: number;
  systolic: number;
  diastolic: number;
  bloodprescom?: string;
  buttonType?: string;
}
