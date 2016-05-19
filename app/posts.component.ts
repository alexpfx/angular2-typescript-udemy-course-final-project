import {Component, OnInit} from 'angular2/core'
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {SpinnerComponent} from "./spinner.component";


@Component({
    selector: 'posts',
    templateUrl: './app/posts.component.html',
    providers: [PostService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]

})

export class PostsComponent implements OnInit{
    ngOnInit():any {
        this.isLoading = true;
        this.postService.getPosts().subscribe (ps => {
           this.posts = ps;
            this.isLoading = false;
        });
    }


    posts;
    isLoading: boolean;

    constructor (private postService: PostService){
        

    }

}