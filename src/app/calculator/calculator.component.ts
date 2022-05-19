import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  cos?: string= undefined;

  constructor() { }

  ngOnInit(): void {
  }
  calculator = {} as CalculatorObject
  showResult:boolean = false;
  test:any;

  calculate(myForm:any){
    this.showResult= true;

    let h= Number(this.calculator.height);
    let w= Number(this.calculator.weight);
    let bmi:number;
    bmi= (w/(h*h)*10000);
    console.log(bmi);
    this.calculator.cos=bmi;

    if(this.calculator.gender=="Woman")
    {
      let BMRW: number;
      BMRW= 655+(9.6*this.calculator.weight)+(1.8*this.calculator.height)-(4.7*this.calculator.age)
      this.calculator.requirement=BMRW
     
    }
    else
    {
      let BMRM: number;
      BMRM= 66+(13.7*this.calculator.weight)+(5*this.calculator.height)-(6.8*this.calculator.age)
      this.calculator.requirement=BMRM
      
    }
    let woda= Number(this.calculator.weight);

    this.calculator.result=(w*30)/1000;
    return myForm;
}
}
export interface CalculatorObject{
  cos?: number;
  height:number;
  weight:number;
  gender:string;
  age:number;
  requirement?:number;
  result:number;

}

