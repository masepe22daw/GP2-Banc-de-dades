import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import dadesB from 'src/assets/dadesB.json';

export interface indicador {
  Country_Name: string,
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


Chart.register(...registerables);

@Component({
  selector: 'app-grafics',
  templateUrl: './grafics.component.html',
  styleUrls: ['./grafics.component.css']
})

export class GraficsComponent implements OnInit {

  inds = this.CopiarStringInd();
  country = this.CopiarStringCountry();
  constructor() { }
  ngOnInit(): void {
    this.RenderChart();
    this.CopiarStringInd();
    this.CopiarStringCountry();
  }

  CopiarStringInd() {
    let n = 0, i = 0;
    let arraySeleciones = [];
    do {
      arraySeleciones.push(indicadores[n].Series_Name);
      n++
    } while (indicadores[n].Series_Name != indicadores[0].Series_Name)
    return arraySeleciones
  }
  CopiarStringCountry() {
    let n = 0, i = 0;
    let arrayPaises = [];
    do {
      i=n-1
      if(indicadores[n].Country_Name!=arrayPaises[i]){
        arrayPaises.push(indicadores[n].Country_Name);
      }
      n++
    } while (indicadores[n].Country_Name != "Zimbabwe")
    arrayPaises.push("Zimbabwe")
    const conjunto = new Set(arrayPaises);
    const unicos = [... conjunto];
    return unicos
  }

  RenderChart() {
    const DATA_COUNT = 7;

    const labels = ["2015", "2016", "2017", "2018", "2019"];
    


    const data = {
      labels: labels,
      datasets: [
        {
          label: '  1',
          data: [dadesB[6]['YR2015'], dadesB[6]['YR2016'], dadesB[6]['YR2017'], dadesB[6]['YR2018'], dadesB[6]['YR2019']],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgb(255, 99, 132)',
          yAxisID: 'y',
        },
        /*
        {
          label: 'Dataset 2',
          data: [dadesB[1]['YR2012'],dadesB[1]['YR2013'],dadesB[0]['YR2014'],dadesB[0]['YR2015'],dadesB[0]['YR2012']],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgb(255, 99, 132)',
          yAxisID: 'y1',
        }
        */
      ]
    };
    const myChart = new Chart("circulo", {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },

        plugins: {
          title: {
            display: true,
            text: 'Analisis de indicadores'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
      },
    });
  }


}
