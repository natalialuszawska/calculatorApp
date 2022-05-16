import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kcalreq',
  templateUrl: './kcalreq.component.html',
  styleUrls: ['./kcalreq.component.css']
})
export class KcalreqComponent implements OnInit {

  constructor() { }

  kcalreq= {} as KcalObject
  showResult:boolean = false;

  ngOnInit(): void {
  }

  kcalrequirement(myForm:any){
    this.showResult= true;

    if(this.kcalreq.gender=="Woman")
    {
      let BMRW: number;
      BMRW= 655+(9.6*this.kcalreq.weight)+(1.8*this.kcalreq.height)-(4.7*this.kcalreq.age)
      this.kcalreq.requirement=BMRW
      console.log(this.kcalreq.requirement)
    }
    else
    {
      let BMRM: number;
      BMRM= 66+(13.7*this.kcalreq.weight)+(5*this.kcalreq.height)-(6.8*this.kcalreq.age)
      this.kcalreq.requirement=BMRM
      console.log(this.kcalreq.requirement)
    }
    return myForm;
}
}
export interface KcalObject{
gender:string;
weight:number;
height:number;
age:number;
requirement?:number;
}
