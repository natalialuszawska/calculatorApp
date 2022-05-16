import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cov= {} as Covid19
  showResult:boolean = false;

  calculate(myForm:any){
    this.showResult= true;

    let h= Number(this.cov.height);
    let w= Number(this.cov.weight);
    
    this.cov.bmi= (w/(h*h)*10000);
    console.log("przed if Women")
    if(this.cov.gender="Women")
    {
      console.log("Wejście do if Women")
        if(this.cov.bmi<=20 && this.cov.age<=20){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 1."
          console.log('Pierwszy if',this.cov.comment)
        }
        else if(this.cov.bmi<=25 && this.cov.age<=20){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 2."
        }
        else if(this.cov.bmi<=30 && this.cov.age<=20){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 3."
        }
        else if(this.cov.bmi<=35 && this.cov.age<=20){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 5."
        }
        else if(this.cov.bmi<=40 && this.cov.age<=20){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 8."
        }
        else if(this.cov.bmi<=20  && this.cov.age>=30 && this.cov.age<40){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 2."
        }
        else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=30 && this.cov.age<40){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 3."
        }
        else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=30 && this.cov.age<40){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 5."
        }
        else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=30 && this.cov.age<40){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 8."
        }
        else if(this.cov.bmi>35 && this.cov.bmi<=40 && this.cov.age>=30 && this.cov.age<40){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 8."
        }
        else if(this.cov.bmi>40 && this.cov.age>=30 && this.cov.age<40){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 13."
        }
        else if(this.cov.bmi<=20 && this.cov.age>=40 && this.cov.age<50){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 3."
        }
        else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=40 && this.cov.age<50){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 4."
        }
        else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=40 && this.cov.age<50){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 7."
        }
        else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=40 && this.cov.age<50){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 12."
        }
        else if(this.cov.bmi>35 && this.cov.bmi<=40 && this.cov.age>=40 && this.cov.age<50){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 20."
        }
        else if(this.cov.bmi>40 && this.cov.age>=40 && this.cov.age<50){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 20."
        }
        else if(this.cov.bmi<=20 && this.cov.age>=50 && this.cov.age<60){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 4."
        }
        else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=50 && this.cov.age<60){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 7."
        }
        else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=50 && this.cov.age<60){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 11."
        }
        else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=50 && this.cov.age<60){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 19."
        }
        else if(this.cov.bmi>35 && this.cov.age>=50 && this.cov.age<60){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 32."
        }
        else if(this.cov.bmi<20 && this.cov.age>=60 && this.cov.age<70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 6."
        }
        else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=60 && this.cov.age<70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 11."
        }
        else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=60 && this.cov.age<70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 18."
        }
        else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=60 && this.cov.age<70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 31."
        }
        else if(this.cov.bmi>35 && this.cov.age>=60 && this.cov.age<70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 52."
        }
        else if(this.cov.bmi<20 && this.cov.age>70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 10."
        }
        else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 17."
        }
        else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 29."
        }
        else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 49."
        }
        else if(this.cov.bmi>35 && this.cov.age>70){
          this.cov.comment="Multiple odds values of severe COVID-19 course equals 82."
        }
    }
    else if(this.cov.gender="Man"){
      if(this.cov.bmi<=20 && this.cov.age<=20){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 2."
        console.log('Chłop')
      }
      else if(this.cov.bmi<=25 && this.cov.age<=20){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 4."
      }
      else if(this.cov.bmi<=30 && this.cov.age<=20){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 6."
      }
      else if(this.cov.bmi<=35 && this.cov.age<=20){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 10."
      }
      else if(this.cov.bmi<=40 && this.cov.age<=20){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 17."
      }
      else if(this.cov.bmi<=20  && this.cov.age>=30 && this.cov.age<40){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 3."
      }
      else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=30 && this.cov.age<40){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 6."
      }
      else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=30 && this.cov.age<40){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 10."
      }
      else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=30 && this.cov.age<40){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 16."
      }
      else if(this.cov.bmi>35 && this.cov.age>=30 && this.cov.age<40){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 27."
      }
      else if(this.cov.bmi<=20 && this.cov.age>=40 && this.cov.age<50){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 5."
      }
      else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=40 && this.cov.age<50){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 9."
      }
      else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=40 && this.cov.age<50){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 15."
      }
      else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=40 && this.cov.age<50){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 25."
      }
      else if(this.cov.bmi>35 && this.cov.age>=40 && this.cov.age<50){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 43."
      }
      else if(this.cov.bmi<=20 && this.cov.age>=50 && this.cov.age<60){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 9."
      }
      else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=50 && this.cov.age<60){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 14."
      }
      else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=50 && this.cov.age<60){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 24."
      }
      else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=50 && this.cov.age<60){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 41."
      }
      else if(this.cov.bmi>35 && this.cov.age>=50 && this.cov.age<60){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 68."
      }
      else if(this.cov.bmi<20 && this.cov.age>=60 && this.cov.age<70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 14."
      }
      else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>=60 && this.cov.age<70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 23."
      }
      else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>=60 && this.cov.age<70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 39."
      }
      else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>=60 && this.cov.age<70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 65."
      }
      else if(this.cov.bmi>35 && this.cov.age>=60 && this.cov.age<70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 109."
      }
      else if(this.cov.bmi<20 && this.cov.age>70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 22."
      }
      else if(this.cov.bmi>20 && this.cov.bmi<=25 && this.cov.age>70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 37."
      }
      else if(this.cov.bmi>25 && this.cov.bmi<=30 && this.cov.age>70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 62."
      }
      else if(this.cov.bmi>30 && this.cov.bmi<=35 && this.cov.age>70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 103."
      }
      else if(this.cov.bmi>35 && this.cov.age>70){
        this.cov.comment="Multiple odds values of severe COVID-19 course equals 174."
      }

    }
    return myForm;
  }

}
export interface Covid19{
  gender:string;
  height:number;
  weight:number;
  age:number;
  bmi:number;
  comment:string;
}
