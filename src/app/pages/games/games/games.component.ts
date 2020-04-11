import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.services';
import { NgForm } from '@angular/forms';
import { GameModel } from '../../../Models/game.model';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit {

  game = new GameModel();

  loading:boolean = true;


  games:any[] = [];

  constructor( private apiService:apiService) {
    this.apiService.getGames().subscribe( (resp:any) =>{
        this.loading = false;
        this.games = resp.data;
    });
   }

  ngOnInit() {
  }


  deleteGame( game:String, id:String){
    console.log(id);
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Quieres eliminar: ${game}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: "Cancelar" 
    }).then((result) => {
      console.log(result);
      if (result.value) {
        console.log(id);
        let indice = this.games.indexOf(id);
        this.games.splice(indice);
        this.apiService.deleteGame( id ).subscribe( (params:any) => {

          Swal.fire(
            'Eliminado',
            params.messages,
            'success'
          );
        });
      }
    });
  }

}
