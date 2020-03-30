import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.services';



@Component({
  selector: 'app-registred-game',
  templateUrl: './registred-game.component.html',
  styleUrls: ['./registred-game.component.scss']
})
export class RegistredGameComponent implements OnInit {

  games:any[] = [];

  constructor( private apiService:apiService) {

    this.apiService.getGames().subscribe( (resp:any) =>{
        this.games = resp.data;
        console.log(this.games);
    });
   }

  ngOnInit() {
      
  }

}
