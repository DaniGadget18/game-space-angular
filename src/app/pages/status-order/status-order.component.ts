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

  constructor( private activatedrouter: ActivatedRoute,
               private apiservice: apiService ) {
    this.activatedrouter.params.subscribe( params => {
      this.order.id_order = params.id;
    });



   }

  ngOnInit() {
  }

  getidOrder( ngform:NgForm ) {
    this.order.status = ngform.value.status

    this.apiservice.statusOrder(this.order).subscribe( resp => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se ha cambiado el estado del orden',
      showConfirmButton: false,
      timer: 1500
    })
    }, error => {
       
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Hubo un problema',
          showConfirmButton: false,
          timer: 1500
        })
    });
  }

}
