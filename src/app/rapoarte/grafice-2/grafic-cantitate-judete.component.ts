import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-grafic-cantitate-judete',
  templateUrl: './grafic-cantitate-judete.component.html',
  styleUrls: ['./grafic-cantitate-judete.component.css']
})
export class GraficCantitateJudeteComponent implements OnInit {
  @ViewChild("chart", {static:false}) chart: ChartComponent;
  public chartOptionsDiscount: Partial<ChartOptions>;
  public chartDatasetsVolumLivratZile: Array<any> = [
    { data: [], label: 'Vanzare Totala Per Grupe Articole' }
  ];
  public chartLabelsVolum: Array<any> = [];
  public volumLivratZile =[
    {
    ZiSaptamana: "Luni",
    VolumMediuLivrat : 243.347
    },
    {
      ZiSaptamana: "Marti",
      VolumMediuLivrat : 121.347
      },
      {
        ZiSaptamana: "Miercuri",
        VolumMediuLivrat : 41.347
  },
  {
    ZiSaptamana: "Joi",
    VolumMediuLivrat : 110.347
},
{
  ZiSaptamana: "Vineri",
  VolumMediuLivrat : 94.347
},
{
  ZiSaptamana: "Sambata",
  VolumMediuLivrat : 20.347
}]
  constructor() { 
    for(let i=0; i<this.volumLivratZile.length; i++){
      this.chartDatasetsVolumLivratZile[0].data.push(this.volumLivratZile[i].VolumMediuLivrat)
      this.chartLabelsVolum.push(this.volumLivratZile[i].ZiSaptamana)
    }


    this.chartOptionsDiscount = {
      series: [
        {
          name: "Discount din Total",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Procent Discount acordat pe trimestru",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
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