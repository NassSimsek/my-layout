import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: "<router-outlet></router-outlet>"
 
})
export class AppComponent implements Araba {
  plaka!: string;
  kapı!: number;
  kilometre?: number | undefined;
  velesbit:bisiklet={
    marka: '',
    teker: 0
  }


  title = 'my-layout';

}

export interface Araba {
  plaka:string;
  kapı:number;
  kilometre?:number;
}

export interface bisiklet {
  marka:string;
  teker:number;
  zincir?:number;
}