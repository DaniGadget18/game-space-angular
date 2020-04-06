import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Route, Router} from '@angular/router';
import { authServices } from '../../services/auth.services';
import {error} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor( private router: Router, private authservice: authServices) { }

  ngOnInit() {
  }
  login(form: NgForm) {
    this.authservice.login(form.value.email, form.value.password).subscribe(resp => {
      if (resp['status'] === 'OK') {
        localStorage.setItem('log', 'on');
        this.router.navigate(['/dashboard']);
      }
    });
  }
}



