import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type2-diabetes',
  templateUrl: './type2-diabetes.component.html',
  styleUrls: ['./type2-diabetes.component.css']
})
export class Type2DiabetesComponent implements OnInit {
 
  constructor() { }

  type2 = {} as Type2Object
  showResult: boolean = false;

  ngOnInit(): void {
  }

  type2Test(myForm: any) {
    this.showResult = true;
    //this.type2.score=10;
    let tempScore:number=0;
    //AGE
    if (this.type2.age == "lessThan45") {
      tempScore = 0; 
    }
    else if (this.type2.age == "45to54") {
      tempScore = 2;
    }
    else if (this.type2.age == "55to64") {
      tempScore = 3;
      
    }
    else
      tempScore = 4;
      console.log("age"+tempScore);
    //BMI
    if (this.type2.bmi == "25to29") {
      tempScore = tempScore + 1;
    }
    else if (this.type2.bmi == "moreThan30") {
      tempScore = tempScore + 3;
    }
    console.log("bmi"+tempScore);
    this.type2.score=tempScore;
    //Abdominal
    if (this.type2.abdominal == "94to102") {
      this.type2.score = this.type2.score + 3;
    }
    else if (this.type2.abdominal == "moreThan102") {
      this.type2.score = this.type2.score + 4;
    }
    //Activity
    if(this.type2.activity=="notEveryday")
    {
      this.type2.score = this.type2.score + 1;
    }
    //Meds
    if(this.type2.meds=="y")
    {
      this.type2.score = this.type2.score + 2;
    }
    //Eat
    if(this.type2.eat=="n")
    {
      this.type2.score = this.type2.score + 1;
    }
    //Glucose
    if(this.type2.glucose=="y")
    {
      this.type2.score = this.type2.score + 5;
    }
    //Family
    if(this.type2.family=="yw")
    {
      this.type2.score = this.type2.score + 3;
    }
    else if(this.type2.family=="yh")
    {
      this.type2.score = this.type2.score + 5;
    }
    //Illness
    if(this.type2.illness=="stroke" || this.type2.illness=="ha" || this.type2.illness=="ht" || this.type2.illness=="amp" )
    {
      this.type2.score = this.type2.score + 2;
    }
    
    //Smoke
    if(this.type2.family=="y")
    {
      this.type2.score = this.type2.score + 2;
    }
    else if(this.type2.family=="past")
    {
      this.type2.score = this.type2.score + 1;
    }



    return myForm;
  }
}

export interface Type2Object {
  gender: string;
  weight: number;
  height: number;
  age: string;
  bmi: string;
  score?: number;
  abdominal:string;
  activity:string;
  meds:string;
  eat: string;
  glucose:string;
  family:string;
  illness:string;
  smoke:string;
}
