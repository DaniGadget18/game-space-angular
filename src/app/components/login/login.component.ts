import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  login(form: NgForm) {
    console.log(form.value);

    if (form.value.email === form.value.email) {
      localStorage.setItem('email', form.value.email);

      this.router.navigate(['/dashboard']);
    }}


}
