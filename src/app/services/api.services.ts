import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameModel } from '../Models/game.model';
import {UserModel} from '../Models/user.model';
import { OrderModel } from '../Models/order.model';


@Injectable({
    providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class apiService {

    constructor ( private http: HttpClient) {

    }

    private url = 'http://game-space-api.herokuapp.com/api/games';
    private urluser = 'http://game-space-api.herokuapp.com/api/users';
    private urlstatistics = 'http://game-space-api.herokuapp.com/api/statistics';
    private orders = 'http://game-space-api.herokuapp.com/api/order';

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
    
    
    // Fuciones para estadisticas
    getSalesMonth() {
      return this.http.get(`${this.urlstatistics}/getSalesMonth`);
    }
    getProfits() {
      return this.http.get(`${this.urlstatistics}/getProfits`);
    }
    
    getOrdersPerMonth() {
      return this.http.get(`${this.urlstatistics}/getOrdersPerMonth`);
    }
    getProfitsLastFiveMonths() {
      return this.http.get(`${this.urlstatistics}/getProfitsLastFiveMonths`);
    }
    getBestUser() {
      return this.http.get(`${this.urlstatistics}/getBestUser`);
    }


      //nuevas

    getProfitsMonth(year) {
      return this.http.post(`${this.orders}/getOrdersProfitPerYear/`, {year: year});

    }

    getOrdersMonth( year) {
      return this.http.post(`${this.orders}/getOrdersProfitPerYear/`, {year: year});
    }

    


    // funciones ordenes
    getOrdersAll() {
      return this.http.get(`${this.orders}/getOrders`);
    }

    statusOrder(order: OrderModel) {
      const data = {
        id: order.id_order,
        status: order.status
      }
      return this.http.post(`${this.orders}/updateOrder`, data);
    }

    getOneOrder(id_order) {
      const data = {
        id: id_order
      }
      return this.http.get(`${this.orders}/getOneOrder/${id_order}`);
    }

    countAllUser() {
      return this.http.get(`${this.urluser}/getAllUserCount`);
    }

    getOrderDetails(id) {
      const data = {
        id: id
      }
      return this.http.post(`${this.orders}/getOrdersDetails`, data);
    }
}


