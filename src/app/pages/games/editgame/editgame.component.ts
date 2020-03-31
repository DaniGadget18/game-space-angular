import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { GameModel } from "src/app/Models/game.model";
import { ActivatedRoute } from "@angular/router";
import { apiService } from "../../../services/api.services";
import Swal from "sweetalert2";

@Component({
  selector: "app-edit",
  templateUrl: "./editgame.component.html"
})
export class EditGameComponent implements OnInit {
  game = new GameModel();

  juego: any;

  data: any;

  constructor(
    private activeRouter: ActivatedRoute,
    private _apiService: apiService
  ) {
    this.activeRouter.params.subscribe(params => {
      this.obtenerGame(params.id);
    });
  }

  ngOnInit() {}

  obtenerGame(id: string) {
    this._apiService.getGameById(id).subscribe((data: any) => {
      this.data = data.data;

      console.log(data.data);

      this.game.title = data.data.title;
      this.game.price = data.data.price;
      this.game.description = data.data.description;
      this.game.image = data.data.image;
      this.game.category = data.data.category;
      this.game.year = data.data.year;
      this.game.rank = data.data.rank;
    });
  }

  editGame(form: NgForm) {
    console.log(form);

    this.game.title = form.value.title;
    this.game.price = form.value.price;
    this.game.description = form.value.description;
    this.game.image = form.value.image;
    this.game.category = form.value.category;
    this.game.year = form.value.year;
    this.game.rank = form.value.rank;

    Swal.fire({
      allowOutsideClick: true,
      text: "Espere porfavor"
    });
    Swal.showLoading();

    this._apiService.editGame(this.game, this.data._id).subscribe((resp: any) => {
      Swal.fire({
        allowOutsideClick: true,
        text: resp.message});
    });
  }
}
