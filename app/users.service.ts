import {Http} from 'angular2/http'
import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Router} from "angular2/router";

@Injectable()
export class UsersService {
    url = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http:Http, private router:Router) {

    }

    getUsers() {
        return this.http.get(this.url).map(res => res.json());
    }

    getUser(userId) {
        return this.http.get(this.userUrl(userId)).map(res => res.json());
    }

    saveUser(user) {
        return this.http.post(this.url, JSON.stringify(user)).map(res => res.json());
    }

    updateUser(user) {
        return this.http.put(this.userUrl(user.id), JSON.stringify(user)).map(res => res.json());
    }

    deleteUser (userId){
        return this.http.delete(this.userUrl(userId)).map (res => res.json());
    }


    private userUrl(userId) {
        return this.url + '/' + userId;
    }

}