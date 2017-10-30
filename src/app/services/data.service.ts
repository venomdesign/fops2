import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
    

    constructor(public http:Http){

    }

    getUsers() {
        return this.http.get('http://localhost:56086/api/v1/Administration/GetUsers')
            .map(res => res.json());
    } 

   /* addUser(userName, firstname){
        this.selectedUser = null;
        let user = {
            'userName': userName.trim();
            'firstname': firstname.trim()
        }
        if(!user.userName || !user.firstname){
            return;
        }
        this.UserService.createUser(user).then(res => { this.users.push(res); })
    }


/*    addUser(email:string, password:string){

        var addUserUrl="http://localhost:56086/api/v1/Administration/AddUser";
        return this.http.post(addUserUrl,JSON.stringify({user: password,email: email }),
            {headers:new Headers({'Content-Type':'application/json'})}
            ).map(res=>res.json()).
            subscribe(
                data => localStorage.setItem('id_token',data.auth_token),
                error=>console.log(error)
            );
    }*/
}