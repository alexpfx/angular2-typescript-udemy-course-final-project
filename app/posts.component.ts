import {Component, OnInit} from 'angular2/core'
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {SpinnerComponent} from "./spinner.component";
import {Post} from "./post";


@Component({
    selector: 'posts',
    templateUrl: './app/posts.component.html',
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    providers: [PostService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]

})

export class PostsComponent implements OnInit{
    selectedPost: Post;

    ngOnInit():any {
        this.isLoading = true;
        this.postService.getPosts().subscribe (ps => {
           this.posts = ps;
            this.isLoading = false;
        });
    }


    posts;
    isLoading: boolean;

    selectPost(post){
        this.selectedPost = post;
    }

    constructor (private postService: PostService){
        

    }

}