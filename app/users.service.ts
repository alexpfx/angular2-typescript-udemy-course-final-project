import {Http} from 'angular2/http'
import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Router} from "angular2/router";

@Injectable()
export class UsersService{
    url = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: Http, private router:Router){

    }
    getUsers (){
        return this.http.get(this.url).map(res => res.json());
    }

    getUser (id: string){
        return this.http.get(this.url+'/'+id).map (res => res.json);
    }
    
    saveUser (user){
        return this.http.post(this.url, JSON.stringify(user)).map(res => {
            this.router.navigate(['Users']);
        });
    }

}