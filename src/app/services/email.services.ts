import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class emailServices {

    urlEmail = 'http://game-space-api.herokuapp.com/api/email';

    constructor ( private http: HttpClient ) {

    }

    sendMessage(data) {
        
        return this.http.post(`${this.urlEmail}/sendEmail`, data);
    
    }
    
}