import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Router} from "angular2/router";
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    url = 'http://jsonplaceholder.typicode.com/posts';


    constructor (private http:Http, private router:Router){
        

    }

    getPosts (filter){
        var url = this.url;
        if (filter && filter.userId){
            url += "?userId="+filter.userId;
        }
        
        return this.http.get(url).map(res => res.json ());
    }
    
    getComments (postId){
        return this.http.get(this.getCommentUrl (postId)).map (res => res.json());
    }

    // getUser(userId) {
    //     return this.http.get(this.userUrl(userId)).map(res => res.json());
    // }


    
    
    postUrl (id){
        
    }


    private getCommentUrl(postId) {
        return this.url + '/' + postId + '/comments';
    }
}