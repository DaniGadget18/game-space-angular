import { Component, OnInit } from '@angular/core';
import { apiService } from '../../../services/api.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any[] = [];

  constructor( private _apiService:apiService ) { 

    this._apiService.getUsers().subscribe( (resp:any) => {
        this.users = resp.data;
    });
    
  }

  ngOnInit() {
  }

}
