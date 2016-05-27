import {Component, OnInit} from 'angular2/core'
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {SpinnerComponent} from "./spinner.component";
import {Post} from "./post";
import {UsersService} from "./users.service";


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
    providers: [PostService, UsersService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]

})



export class PostsComponent implements OnInit {
    selectedPost:Post;
    comments = [];

    ngOnInit():any {
        this.loadUsers();
        this.loadPosts();

    }

    private loadUsers() {
        this.userService.getUsers().subscribe(us =>this.users = us);
    }

    users = [];
    posts = [];
    postLoading:boolean;

    private selectPost(post) {
        this.selectedPost = post;
        console.log(post);
        this.postService.getComments(post.id).subscribe(c => {
            this.comments = c;
            console.log(this.comments);

        });

    }

    private loadPosts (filter?){
        this.postLoading = true;

        this.postService.getPosts(filter).subscribe(ps => {
            this.posts = ps;
            this.postLoading = false;
        });
    }

    changeUser (filter){
        this.selectedPost = null;
        this.loadPosts(filter);

    }

    constructor(private postService:PostService, private userService: UsersService) {


    }

}