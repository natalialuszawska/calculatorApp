import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-shape',
  templateUrl: './body-shape.component.html',
  styleUrls: ['./body-shape.component.css']
})
export class BodyShapeComponent implements OnInit {

  wynik?: string= undefined;

  constructor() { }

  ngOnInit(): void {
  }
  body = {} as BodyObject
  showResult:boolean = false;
  test:any;

  calculateBody(myForm:any){
    this.showResult= true;

    let talia= Number(this.body.waist);
    let biodra= Number(this.body.hips);
    let b:number;
    b=talia/biodra;
    

    if(this.body.gender=="Women")
    {
     if(b>0.8)
     {
      this.body.wynik='android type (apple)';
     }
     else
     {
       this.body.wynik='gynoid type (pear)';
     }
    }
    else
    {
      if(b>1)
      {
       this.body.wynik='android type (apple)';
      }
      else
      {
        this.body.wynik='gynoid type (pear)';
      }
    }
    return myForm;
  }
}
  
export interface BodyObject{
 
  gender:string;
  wynik:string;
  waist:number;
  hips:number;
}


