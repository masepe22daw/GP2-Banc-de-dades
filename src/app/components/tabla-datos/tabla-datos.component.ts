import { Component, OnInit } from '@angular/core';
import * as dadesB from 'src/assets/dadesB.json';

export interface indicador {
  Country_Name: string ,
  Country_Code: string,
  Series_Name: string,
  Series_Code: string,
  YR2012: number,
  YR2013: number,
  YR2014: number,
  YR2015: number,
  YR2016: number,
  YR2017: number,
  YR2018: number,
  YR2019: number,
  YR2020: number,
  YR2021: number
}

const ELEMENT_DATA: indicador[] = dadesB;
console.log(ELEMENT_DATA[0]['Country_Name'])
@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',  
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {
  displayedColumns: string[] = ['Country_Name', 'Country_Code', 'Series_Name', 'Series_Code'];
  dataSource = ELEMENT_DATA
  constructor() { }

  ngOnInit(): void {
  }
}
