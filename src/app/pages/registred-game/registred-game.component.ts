import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.services';
import { NgForm } from '@angular/forms';
import { GameModel } from '../../Models/game.model';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-registred-game',
  templateUrl: './registred-game.component.html',
  styleUrls: ['./registred-game.component.scss']
})
export class RegistredGameComponent implements OnInit {

  game = new GameModel();


  games:any[] = [];

  constructor( private apiService:apiService) {

    this.apiService.getGames().subscribe( (resp:any) =>{
        this.games = resp.data;
        console.log(this.games);
    });
   }

  ngOnInit() {
  }

  sendGame( form:NgForm ) {

  
    Swal.fire({
      allowOutsideClick: true,
      text: 'Espere porfavor'
    });
    Swal.showLoading();


    this.apiService.registredGame(this.game).subscribe( (resp:any)=> {
      Swal.fire({
      allowOutsideClick: true,
      text: resp.message
    });
    }, (err) => {
      console.log(err);
    });

  }

}
