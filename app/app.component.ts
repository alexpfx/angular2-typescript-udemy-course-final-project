import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/alt_router";
import {NavBarComponent} from "./navbar.component";
import {UsersComponent} from "./users.component";
import {PostsComponent} from "./posts.component";

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
       <navbar></navbar>
        <router-outlet></router-outlet>       
`,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
@RouteConfig(
    [
        {path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true},
        {path: '/posts', name: 'Posts', component: PostsComponent},
        {path: '/*other', name: 'Other', redirectToTo: 'Users'}
    ]
)

export class AppComponent {

}
