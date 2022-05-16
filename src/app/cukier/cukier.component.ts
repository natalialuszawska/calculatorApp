import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cukier',
  templateUrl: './cukier.component.html',
  styleUrls: ['./cukier.component.css']
})
export class CukierComponent implements OnInit {
  info?: string= undefined;
  constructor() { }

  ngOnInit(): void {
  }

  cukier = {} as CukierObject
  showResult:boolean = false;
  test:any;

  calculateSugar(myForm:any){
    this.showResult= true;
    let c= Number(this.cukier.sugar);
    
    if(c>70 && c<=99)
    {
      this.cukier.info='Normal sugar';
      
      //return('OK')
      
    }
    else if(c>99)
    {
      //return('Low');
      this.cukier.info='Sugar too high';
      
    }
    else
    {
      //return('D')
      this.cukier.info='Sugar too low';
    }
    return myForm;

  }
}
  
export interface CukierObject{
sugar:number;
info:string;

}
