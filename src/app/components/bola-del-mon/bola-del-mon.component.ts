import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/dadesA.json'

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

for(let ind in data){
  if(data[ind]['Series_Code']=='SI.DST.50MD'&& data[ind]['YR2003']!='..'){
    console.log(data[ind]['Country_Name'] +" "+ data[ind]['YR2003']);
  }
}



