import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from "angular2/alt_router";


@Component({
    selector: 'posts',
    templateUrl: './app/posts.component.html',
    directives: [ROUTER_DIRECTIVES]

})

export class PostsComponent {

}