import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {Location} from "angular2/platform/common";

@Component({
    selector:'navbar',
    templateUrl: './app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]

})
export class NavBarComponent{


    constructor(private location:Location, private router:Router){
        console.log(this.location);
    }

    isActive (route){
        var route = this.router.generate([route]);
        return this.router.isRouteActive(route);
    }


}