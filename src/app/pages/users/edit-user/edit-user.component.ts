import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/user.model';
import { apiService } from '../../../services/api.services';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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

      console.log(this.user);

      this.user_id = resp.data;
    });
  }

  editUser( form:NgForm ) {
    this.user.role = form.value.role;
    this._apiService.editUser(this.user).subscribe( (resp: any) => {
      console.log(resp);
    });

  }



}
