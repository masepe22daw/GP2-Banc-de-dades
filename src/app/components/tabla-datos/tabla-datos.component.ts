import { Component, OnInit } from '@angular/core';
import dadesB from 'src/assets/dadesB.json';

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

const indicadores: indicador[] = dadesB;

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',  
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {
  displayedColumns: string[] = ['Country_Name', 'Country_Code', 'Series_Name', 'Series_Code','YR2012', 'YR2013', 'YR2015', 'YR2016', 'YR2017', 'YR2018', 'YR2019', 'YR2020', 'YR2021'];
  dataSource = indicadores
  constructor() { 
    console.log(indicadores[1].Country_Name)
  }

  ngOnInit(): void {
  }
}
