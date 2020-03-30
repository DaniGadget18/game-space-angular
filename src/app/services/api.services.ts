import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '../Models/game.model';


@Injectable({
    providedIn: 'root'
})
export class apiService {

    constructor ( private http:HttpClient) {

    }

    private url = 'http://game-space-api.herokuapp.com/api/games';

    getGames() {
        return this.http.get("http://game-space-api.herokuapp.com/api/games/get-games");
    }


    registredGame( game:GameModel ) {

        const data = {
            title: game.title,
            description: game.description,
            price: game.price,
            image:game.image,
            category: game.category,
            year: game.year,
            rank: game.rank
        };

        return this.http.post(`${this.url}/registrer_game`, data);

    }
}