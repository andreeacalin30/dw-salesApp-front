import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";

export type MultiBarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};
@Component({
  selector: 'app-grafice',
  templateUrl: './grafice.component.html',
  styleUrls: ['./grafice.component.css']
})
export class GraficeComponent implements OnInit {

  public chartDatasetsVanzareTotalaGrupe: Array<any> = [
    { data: [], label: 'Vanzare Totala Per Grupe Articole' }
  ];
  public chartLabelsGrupe: Array<any> = [];
  public vanzariGrupaArticole=[
    {
    NumeGrupa: "a",
    VanzareTotala: 11.347
    },
    {
      NumeGrupa: "b",
      VanzareTotala: 121.347
      },
      {
        NumeGrupa: "c",
        VanzareTotala: 41.347
  }]
  @ViewChild("chart", {static:false}) chart: ChartComponent;
  public chartOptionsMultiBar: Partial<MultiBarChartOptions>;
  constructor() {
    for(let i=0; i<this.vanzariGrupaArticole.length; i++){
      this.chartDatasetsVanzareTotalaGrupe[0].data.push(this.vanzariGrupaArticole[i].VanzareTotala)
      this.chartLabelsGrupe.push(this.vanzariGrupaArticole[i].NumeGrupa)
    }

    this.chartOptionsMultiBar = {
      series: [
        {
          name: "Unitate masura 1",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "Unitate masura 2",

          data: [53, 32, 33, 52, 13, 44, 32]
        },
        {
          name: "Unitate masura 3",

          data: [53, 32, 33, 52, 13, 44, 32]
        }
      ],
      chart: {
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ["Bucuresti","Giurgiu", "Ialomita", "Prahova", "Cluj"]
      }
    };
   }

  ngOnInit() {
  }

  public chartType: string = 'bar';
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }

}
