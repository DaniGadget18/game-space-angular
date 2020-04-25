import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.services';

@Component({
  selector: 'app-refound',
  templateUrl: './refound.component.html',
  styleUrls: ['./refound.component.scss']
})
export class RefoundComponent implements OnInit {

  refounds:any[] = [];

  constructor( private apiservice: apiService) {

    this.apiservice.getRefound().subscribe( (resp:any) => {
      this.refounds = resp.data;
    });

   }

  ngOnInit() {
  }

}
