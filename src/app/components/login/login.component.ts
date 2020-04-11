import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { authServices } from "../../services/auth.services";
import { UserModel } from "../../Models/user.model";
import Swal from "sweetalert2";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user = new UserModel();


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private router: Router, private authservice: authServices) {}

  ngOnInit() {}

  login(form: NgForm) {
    let timerInterval;

    Swal.fire({
      title: "Espere...",
      html: "Iniciando sesion",
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        this.authservice
          .login(form.value.email, form.value.password)
          .subscribe((resp) => {
            localStorage.setItem('log', 'on');
            localStorage.setItem('email', form.value.email);
            this.router.navigate(['/dashboard']);
          }, (err) => {
            if(err.error['status'] === 'error'){
              Swal.fire({
                icon: 'error',
                title: 'Error al iniciar sesion',
                text: 'Usuario o contraseña incorrecta'
              });
            }
          });
      }
    });
  }
}
