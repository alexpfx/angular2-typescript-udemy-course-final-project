import {Component, OnInit} from 'angular2/core'
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {EmailValidators} from "./EmailValidators";
import {CanDeactivate, RouteParams, Router} from "angular2/router";
import {UsersService} from "./users.service";
import {User} from "./user";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'user',
    templateUrl: './app/userform.component.html',
    providers: [UsersService, HTTP_PROVIDERS]

})
export class UserFormComponent implements CanDeactivate, OnInit{
    userForm:ControlGroup;
    user:User;
    mode = 'New';
    
    routerCanDeactivate(next, previous) {
        if (this.userForm.dirty){
            return confirm('Are you sure?');
        }
    }

    ngOnInit():any {
        var id = this.routeParams.get('id');
        this.mode = id ? 'Edit' : 'New';
        if (!id)
            return;
        // this.userServices.getUser(id).subscribe(user => this.user = user, res => {
        //     if (res.status == 404){
        //         this.router.navigate(['NotFounds']);
        //     }
        // });
        //
        
        return undefined;
    }


    constructor(fb:FormBuilder, private userServices: UsersService, private routeParams: RouteParams, private router: Router) {

        this.userForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidators.validateEmail])],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipCode: ['']
            })

        })
    }


    onSubmit(){
        this.user = this.userForm.value;

        this.userServices.saveUser(this.user).subscribe(res => console.log(res));
    }

}