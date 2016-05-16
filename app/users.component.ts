import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {UsersService} from "./users.service";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {User} from "./user";


@Component({
    selector: 'users',
    templateUrl: './app/users.component.html',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]

})

export class UsersComponent implements OnInit {
    users:[{id:number, name:string, email:string}];

    constructor(private usersServices:UsersService) {

    }

    ngOnInit() {
        this.usersServices.getUsers().subscribe(us => {
            this.users = us;
        });
    }

    deleteUser(user:User) {
        if (confirm("Are you sure you want to delete " + user.name + "?")){
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this.usersServices.deleteUser(user.id).subscribe(null, err => {
                alert('could not delete user');
                this.users.splice(index, 0, user);
            });
        }
    }


}