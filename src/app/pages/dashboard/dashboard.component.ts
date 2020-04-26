import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {apiService} from '../../services/api.services';
import { Label, Color } from 'ng2-charts';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  countAllOrder:any = {};

  MonthsOrd: any[] = [];
  OrdtPerMonth: any[] = [];

  MonthsSal: any[] = [];
  SalesPerMonth: any[] = [];
  SalesPerMonthNow: any = {};

  profit_day_month: any[] = [];
  getProfitMonthday: any[]= [];

  dropDownData: any[]= [
    2020,
    2018,
    2019,
  ];

  ProfitsTotal: any = {};

  totalUsers: any;
  year: any;

  month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  lastmonth:any;
  //Otra grafica
  public barChartOptionsOrd: ChartOptions = {
    responsive: true,
  };
  public barChartLabelsOrd: Label[] = this.MonthsOrd;
  public barChartTypeOrd: ChartType = 'bar';
  public barChartLegendOrd = true;
  public barChartPluginsOrd = [];

  public barChartDataOrd: ChartDataSets[] = [
    { data: this.OrdtPerMonth, label: 'Ordenes' } 
  ];

  //Otra grafica
  public barChartOptionsSal: ChartOptions = {
    responsive: true,
  };
  public barChartLabelsSal: Label[] = this.MonthsSal;
  public barChartTypeSal: ChartType = 'bar';
  public barChartLegendSal = true;
  public barChartPluginsSal = [];

  public barChartDataSal: ChartDataSets[] = [
    { data: this.SalesPerMonth, label: 'Ventas' }
  ];
  

  public barChartLabelsDay: Label[] = this.profit_day_month;
  public barChartDataDay: ChartDataSets[] = [
    { data: this.getProfitMonthday, label: 'Ventas' }
  ];
  public lineChartType = 'line';
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(36,41,57,0.8)',
    },
  ];

  onOptionsSelected(anio){
    this.year = anio;
    console.log(anio);
  }

  constructor(private apiservice: apiService) {

    this.year = 2018;

    this.apiservice.getProfits().subscribe(( resp: any) => {
      this.ProfitsTotal = resp.data[0];
    });

    this.apiservice.getSalesMonth().subscribe((resp: any) => {
      let ultimo:number;
      for (let index = 0; index < resp.data.length; index++) {
        this.MonthsSal.push(  this.month[resp.data[index].Month -1 ] );
        this.SalesPerMonth.push(  resp.data[index].Total );
        ultimo = index;
      }
      this.SalesPerMonthNow = resp.data[ultimo];
      this.lastmonth = this.month[resp.data[ultimo].Month - 1];
    });

    //nueva
    this.apiservice.getOrdersMonth(this.year).subscribe(( resp: any ) => {
      console.log(this.year);
      for (let index = 0; index < resp.data.length; index++) {
        this.MonthsOrd.push(  this.month[resp.data[index].Mes - 1] );
        this.OrdtPerMonth.push(  resp.data[index].cantidad ); 
      }
    });

    

    this.apiservice.getProfitsMonth(this.year).subscribe(( resp: any ) => {

      console.log(resp)
      for (let index = 0; index < resp.data.length; index++) {
        let date = formatDate( resp.data[index].Date, 'dd', 'en-US' );
        this.profit_day_month.push( date );
        this.getProfitMonthday.push(  resp.data[index].Total );
      }

        

    });

    this.apiservice.countAllUser().subscribe( (resp:any) =>{
      this.totalUsers = resp.data;
    });

    this.apiservice.getCountOrders().subscribe( (resp:any) => {
      this.countAllOrder = resp.data[0];
      console.log(this.countAllOrder);
    });
  }


  ngOnInit() {

    if ( localStorage.getItem('ux') === '1' ){
      location.reload();
      localStorage.setItem('ux', '2');

    } 
  }

}
