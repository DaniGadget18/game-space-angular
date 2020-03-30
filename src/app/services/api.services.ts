import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class apiService {

    constructor ( private http:HttpClient) {

    }

    getGames() {
        return this.http.get("http://game-space-api.herokuapp.com/api/games/get-games");
    }
}