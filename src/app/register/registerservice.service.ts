import { Injectable } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import { User } from '../register/User'
@Injectable()
export class RegistrationServiceService {
    http: Http;  
    posts_Url: string = 'http://localhost:56086/api/v1/Authorization/AddUsers';
    constructor(public _http: Http) {
       this.http = _http;
    }
    registerUser(user:User) {    
       return this.http.post(this.posts_Url, user, {  }).map(res =>  res.json());     	    
    }
}