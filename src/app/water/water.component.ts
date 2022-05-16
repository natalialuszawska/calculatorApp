import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {
  i?: string= undefined;

  constructor() { }

  ngOnInit(): void {
  }
  water = {} as WaterObject
  showResult:boolean = false;
  test:any;

  calculateWater(myForm:any){
    this.showResult= true;
    let w= Number(this.water.weight);
    this.water.i='Your daily water requirement is:';
    this.water.result=(w*30)/1000;

    return myForm;

  }
}
  
export interface WaterObject{
weight:number;
result:number;
i:string;


}
