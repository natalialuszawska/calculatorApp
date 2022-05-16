import { Component, OnInit,Output } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  cos?: string= undefined;
  LBM?: string = undefined;
  BM?: string = undefined;
  SM?: string = undefined;
  TBW?: string= undefined;

  constructor() { }

  ngOnInit(): void {
  }

  bmi = {} as BmiObject
  showResult:boolean = false;
  test:any;

  calculateParams(myForm:any){
    this.showResult= true;

    let h= Number(this.bmi.height);
    let w= Number(this.bmi.weight);
    let bmi:number;
    bmi= (w/(h*h)*10000);
    console.log(bmi);
    this.bmi.cos=bmi;

    let SM: number;
    let BM:number;
    let TBW:number;

    if(this.bmi.gender=="Women")
    {
      let LBMK: number;
      LBMK= (1.07*w)-148*(w/h)*(w/h);
      SM= 0.49*LBMK-0.05;
      BM=0.2*LBMK;
      //nwm czy spoko ten prostszy wzór
      TBW= 0.73*LBMK
      this.bmi.LBM=LBMK
      this.bmi.SM=SM
      this.bmi.BM= BM
      this.bmi.TBW=TBW
    }
    else
    {
      let LBMM: number;
      LBMM= (1.1*w)-128*(w/h)*(w/h);
      SM= 0.49*LBMM-0.05;
      BM=0.2*LBMM;
      TBW= 0.73*LBMM;
      this.bmi.LBM=LBMM;
      this.bmi.SM=SM;
      this.bmi.BM= BM;
      this.bmi.TBW=TBW;
      this.bmi.percLBM=LBMM/this.bmi.weight*100;
      this.bmi.percSM=SM/this.bmi.weight*100;
      this.bmi.percBM= BM/this.bmi.weight*100;
      this.bmi.percTBW=TBW/this.bmi.weight*100;
    }
    return myForm;

    // this.pieChartData = [
    //  Number(this.bmi.percLBM.toFixed(2)), Number(this.bmi.percSM.toFixed(2)), Number(this.bmi.percBM.toFixed(2)), Number(this.bmi.percTBW.toFixed(2))];
    
    //  this.bmiService.save(this.bmi);
    
     

    //  public pieChartData: SingleDataSet = [this.bmi.LBM, this.bmi.SM, this.bmi.BM, this.bmi.TBW];
    // pieChartLabels: Label[] = [ '% Fat-free mass', '% Bone weight', '% Muscle mass', '% Mass of water'];
  
    // pieChartOptions = {
    //   responsive: true,
    // };
  
    // pieChartColors: Color[] = [
    //   {
    //     borderColor: 'black',
    //     backgroundColor: 'rgba(92, 85, 102,0.30)',
    //   },
    // ];
  
    // pieChartLegend = true;
    // pieChartPlugins = [];
    // pieChartType: ChartType = 'pie';
  
  }
}
  
export interface BmiObject{
  cos?: number;
  LBM?: number;
  BM?: number;
  SM?: number;
  TBW?: number;
  gender:string;
  height:number;
  weight:number;
  percLBM:number;
  percSM:number;
  percBM:number;
  percTBW:number;

}

