import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.services';
import { OrderModel } from 'src/app/Models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  orders: any[] = [];

  constructor( private apiservice: apiService ) { 

    this.apiservice.getOrdersAll().subscribe( (resp: any) =>{
      this.orders = resp.data;
    });
  }

  ngOnInit() {

  }

}
