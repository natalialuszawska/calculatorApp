import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dose',
  templateUrl: './dose.component.html',
  styleUrls: ['./dose.component.css']
})
export class DoseComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  dose = {} as DoseObject
  showResult:boolean = false;
  test:any;

  calculateParams(myForm:any){
    this.showResult= true;

    let h= Number(this.dose.height);
    let w= Number(this.dose.weight);
    let d = Number(this.dose.adultDose);
    let dawka:number;
    let bsa:number;
    bsa=w^0.425*h^0.725*0.007184;
    dawka = bsa/1.73*d;
    console.log(dawka);
    this.dose.cos=dawka;

    
    return myForm;
  }
}
  
export interface DoseObject{
  cos?: number;
  height?:number;
  weight?:number;
  adultDose?:number;
}
