import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Router} from "angular2/router";
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    url = 'http://jsonplaceholder.typicode.com/posts';


    constructor (private http:Http, private router:Router){
        

    }

    getPosts (){
        return this.http.get(this.url).map(res => res.json ());
    }
    
    getPost(idPost) {
        return this.http.get
    }

    // getUser(userId) {
    //     return this.http.get(this.userUrl(userId)).map(res => res.json());
    // }


    postUrl (id){
        
    }


}