import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
    

    constructor(public http:Http){

    }

    getUsers(){
        return this.http.get('http://localhost:56086/api/v1/Authorization/GetUsers')
            .map(res => res.json());
    } 
}