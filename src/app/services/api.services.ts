import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameModel } from '../Models/game.model';
import {UserModel} from '../Models/user.model';


@Injectable({
    providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class apiService {

    constructor ( private http: HttpClient) {

    }

    private url = 'http://game-space-api.herokuapp.com/api/games';
    private urluser = 'http://game-space-api.herokuapp.com/api/users';

    // funciones para juegos

    getGames() {
        return this.http.get(`${this.url}/get-games`);
    }


    registredGame( game: GameModel ) {

        const data = {
            title: game.title,
            description: game.description,
            price: game.price,
            image: game.image,
            category: game.category,
            year: game.year,
            rank: game.rank
        };

        return this.http.post(`${this.url}/create`, data);

    }

    editGame( game: GameModel, id: string ) {
        const data = {
            title: game.title,
            description: game.description,
            price: game.price,
            image: game.image,
            category: game.category,
            year: game.year,
            rank: game.rank
        };
        return this.http.post(`${this.url}/editGame/${id}`, data);
    }

    deleteGame(id: String) {
        return this.http.post(`${this.url}/delete/${id}`, id);
    }

    getGameById( id: String ) {

        return this.http.get(`${this.url}/gamebyid/${id}`);

    }


    // funciones para usuarios

    getUsers() {
        return this.http.get(`${this.urluser}/get-users`);
    }

    registeruser( email: string, password: string, username: string, age: Number, isMale: boolean ) {
      const data = {
        username: username,
        email: email ,
        password: password,
        data: {
        age: age,
          isMale: isMale
      } };
    return this.http.post(`${this.urluser}/create`, data);
  }

    getUserbyId( id:String ) {
        return this.http.get(`${this.urluser}/getusersById/${id}`);
    }

    editUser(user: UserModel, _id:String){
        const headers = new HttpHeaders({
            'token':localStorage.getItem('token'),
        });
        const data = {
            data: user.data,
            role: user.role,
            id: _id
        };
        return this.http.post(`${this.urluser}/update`, data, { headers });
    }

    deleteUser( id:String ){
        return this.http.post(`${this.urluser}/delete/${id}`, id);
    }

}


