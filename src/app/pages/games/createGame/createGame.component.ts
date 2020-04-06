import { Component, OnInit } from '@angular/core';
import { apiService } from '../../../services/api.services';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { GameModel } from '../../../Models/game.model';


@Component({
  selector: 'app-create',
  templateUrl: './createGame.component.html'
})
export class CreateGameComponent implements OnInit {

  game = new GameModel();
  games:any[] = [];

  constructor( private apiService:apiService,
               private activeRouter: ActivatedRoute ) {}

  ngOnInit() {
  }

  sendGame( form: NgForm ) {
    Swal.fire({
      allowOutsideClick: true,
      text: 'Espere porfavor'
    });
    Swal.showLoading();


    this.apiService.registredGame(this.game).subscribe( (resp: any) => {
      Swal.fire({
      allowOutsideClick: true,
      text: resp.message
    });
    }, (err) => {
      console.log(err);
    });

  }

}
