import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '../Models/game.model';
import {UserModel} from '../Models/user.model';


@Injectable({
    providedIn: 'root'
})
export class apiService {

    constructor ( private http: HttpClient) {

    }

    private url = 'http://game-space-api.herokuapp.com/api/games';
    private urluser = 'http://game-space-api.herokuapp.com/api/users';

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
    log( email: string, password: string ) {
       const data = {
         email: email,
         password: password
       };
      return this.http.post(`${this.urluser}/login/`, data);

  }


}
