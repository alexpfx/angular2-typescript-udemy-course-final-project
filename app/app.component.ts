import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {NavBarComponent} from "./navbar.component";
import {UsersComponent} from "./users.component";
import {PostsComponent} from "./posts.component";
import {HomeComponent} from "./home.component";
import {UserComponent} from "./user.component";

@Component({
    selector: 'my-app',
    template: `
       <navbar></navbar>
       <div class="container">
            <router-outlet></router-outlet>
        </div>
               
`,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
@RouteConfig(
    [
        {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
        {path: '/users', name: 'Users', component: UsersComponent},
        {path: '/users/:id', name: 'UserDetail', component: UsersComponent},
        {path: '/users/new', name: 'User', component: UserComponent},
        {path: '/posts', name: 'Posts', component: PostsComponent},
        {path: '/*other', name: 'Other', redirectTo: ['Home']}
    ]
)

export class AppComponent {

}
