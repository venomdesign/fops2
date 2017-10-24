import { Injectable } from '@angular/core';
import {HttpModule, Http,Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import { User } from './User'
@Injectable()
export class RegistrationServiceService {
    http: Http;
  
    posts_Url: string = 'http://localhost:56086/api/v1/Authorization/AddUser';
    constructor(public _http: Http) {
       this.http = _http;
    }
    registerUser(user:User) {
		const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.posts_Url, user, {headers: headers}).map(res=>res.json());
	}
}
