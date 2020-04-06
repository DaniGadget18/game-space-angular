import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class authServices {

    userToken: String;

    constructor ( private http: HttpClient) {

    }

    private urluser = 'http://game-space-api.herokuapp.com/api/users';

    login( email: string, password: string ) {
       const data = {
         email: email,
         password: password
       };
      return this.http.post(`${this.urluser}/login`, data).pipe(
          map( (resp:any) => {
              this.guardarToken(resp.data['token']);
              return resp;
          })
      );
    };

    private guardarToken( idToken: string ) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);

    };

    leerToken() {
        if ( localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        } else {
            this.userToken = '';
        }

        return this.userToken;

    }


}


