import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.services';
import { OrderModel } from 'src/app/Models/order.model';
import { emailServices } from 'src/app/services/email.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  orders: any[] = [];
  order: any = {};

  constructor( private apiservice: apiService,
               private emailservices: emailServices ) { 

    this.apiservice.getOrdersAll().subscribe( (resp: any) =>{
      this.orders = resp.data;
    });
  }

  ngOnInit() {

  }

  sendOrder(id_order) {
    this.apiservice.getOneOrder(id_order).subscribe( (resp:any) =>{

      if(resp.Status = 'OK'){

        this.emailservices.sendMessage(resp.data[0]).subscribe( resp => {
          console.log(resp);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha enviado correctamente un email',
            showConfirmButton: false,
            timer: 1500
          })
       }, error => {
         console.log(error);
       });

      } else {

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Hubo un error al mandar el correo',
          showConfirmButton: false,
          timer: 1500
        })

      }
    }, error => {
      console.log(error);
    });
  }

  sendOrdRefound(id_order) {
    this.apiservice.refound(id_order).subscribe( (resp:any) => {
      console.log(resp);
    });
  }
}
