import { Injectable } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import { User } from './User'
@Injectable()
export class RegistrationServiceService {
    http: Http;  
    posts_Url: string = 'http://<domainname>/register';
    constructor(public _http: Http) {
       this.http = _http;
    }
    registerUser(user:User) {    
       return this.http.post(this.posts_Url, user, {  }).map(res =>  res.json());     	    
    }
}