import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insulin',
  templateUrl: './insulin.component.html',
  styleUrls: ['./insulin.component.css']
})
export class InsulinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  insulina = {} as InsulinaObject
  showResult:boolean = false;
  test:any;

  calculateInsulina(myForm:any){
    this.showResult= true;
    let insu= Number(this.insulina.i);
    let glu= Number(this.insulina.g);
    let wynik:number;
    wynik=(insu*glu)/22.5;
    if(wynik<2.5)
    {
      this.insulina.info='There are no indications for insulin resistance';
    }
    else 
    {
      this.insulina.info='Indications for insulin resistance, consult your doctor';
    }

  }
}

  export interface InsulinaObject{
  
    g?: number;
    i?: number;
    info?:string;
  }

