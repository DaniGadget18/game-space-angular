import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/Models/order.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { apiService } from '../../services/api.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-status-order',
  templateUrl: './status-order.component.html',
  styleUrls: ['./status-order.component.scss']
})
export class StatusOrderComponent implements OnInit {

  order = new OrderModel();
  games:any[] = [];
  orderall:any[] = [];

  constructor( private activatedrouter: ActivatedRoute,
               private apiservice: apiService ) {
    this.activatedrouter.params.subscribe( params => {
      this.order.id_order = params.id;
    });

    this.apiservice.getOrderDetails(this.order.id_order).subscribe( (resp:any) => {
      console.log(resp);
      for (let index = 0; index < resp.data.length; index++) {
        this.games.push(resp.data[index].game_id);
        
      }

      this.orderall = resp.orden[0];

    });

  }

  ngOnInit() {
  }

}
