import { Component, OnInit } from "@angular/core";
import { apiService } from "../../../services/api.services";
import Swal from "sweetalert2";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  loading:boolean = true;


  users: any[] = [];

  constructor(private _apiService: apiService) {
    this._apiService.getUsers().subscribe((resp: any) => {
      this.loading = false;
      this.users = resp.data;
    });
  }

  ngOnInit() {

  }

  deleteUser(id: String, username: String) {
    Swal.fire({
      title: "¿Estas seguro?",
      text: `Quieres eliminar: ${username}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this._apiService.deleteUser(id).subscribe((resp: any) => {
          let indice = this.users.indexOf(id);
          this.users.splice(indice);
          Swal.fire("Eliminado", resp.messages, "success");
        }, (error) => {
          Swal.fire("Hubo un problema", error.error.messages, "error");
        });
      }
    });
  }
}
