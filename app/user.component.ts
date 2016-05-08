import {Component} from 'angular2/core'
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {EmailValidators} from "./EmailValidators";
import {CanDeactivate} from "angular2/router";
import {UsersService} from "./users.service";
import {User} from "./user";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'user',
    templateUrl: './app/user.component.html',
    providers: [UsersService, HTTP_PROVIDERS]

})
export class UserComponent implements CanDeactivate{
    userForm:ControlGroup;
    user:User;
    
    routerCanDeactivate(next, previous) {
        if (this.userForm.dirty){
            return confirm('Are you sure?');
        }
    }
    

    constructor(fb:FormBuilder, private userServices: UsersService) {
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