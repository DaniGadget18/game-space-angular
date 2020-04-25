import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/user.model';
import { apiService } from '../../../services/api.services';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user = new UserModel();
  user_id:any[] = [];

  constructor( private _apiService:apiService,
               private activatedrouter:ActivatedRoute ) { 
    this.activatedrouter.params.subscribe( (params:any) => {
      this.getuserbyid(params.id);
    });
   }

  ngOnInit() {
  }

  getuserbyid( id: String ) {
    this._apiService.getUserbyId(id).subscribe( (resp: any) => {
      this.user = resp.data;
      this.user_id = resp.data;
      console.log(this.user_id);
    });
  }

  editUser( form:NgForm ) {
    this.user.role = form.value.role;
    console.log(this.user);
    this._apiService.editUser(this.user, this.user_id['_id']).subscribe( (resp: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado',
        showConfirmButton: false,
        timer: 1500
      });
    }, (error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar el usuario',
        showConfirmButton: false,
        timer: 1500
      });

    });

  }



}
