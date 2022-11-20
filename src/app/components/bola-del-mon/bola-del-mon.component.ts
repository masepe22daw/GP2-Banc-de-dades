import { Component, OnInit } from '@angular/core';
import * as dataB from 'src/assets/dadesB.json'

@Component({
  selector: 'app-bola-del-mon',
  templateUrl: './bola-del-mon.component.html',
  styleUrls: ['./bola-del-mon.component.css']
})
export class BolaDelMonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/*
for(let ind in dataB){
  if(dataB[ind]['Series_Code']=='ER.H2O.FWDM.ZS'&& dataB[ind]['YR2012']!='..'){
    console.log(dataB[ind]['Country_Name'] +" "+ dataB[ind]['YR2012']);
  }
}
*/


