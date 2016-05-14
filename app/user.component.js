System.register(['angular2/core', 'angular2/common', "./EmailValidators", "angular2/router", "./users.service", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, EmailValidators_1, router_1, users_service_1, http_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (EmailValidators_1_1) {
                EmailValidators_1 = EmailValidators_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(fb, userServices, routeParams) {
                    this.userServices = userServices;
                    this.routeParams = routeParams;
                    this.mode = 'New';
                    this.userForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, EmailValidators_1.EmailValidators.validateEmail])],
                        phone: [''],
                        address: fb.group({
                            street: [''],
                            suite: [''],
                            city: [''],
                            zipCode: ['']
                        })
                    });
                }
                UserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.userForm.dirty) {
                        return confirm('Are you sure?');
                    }
                };
                UserComponent.prototype.ngOnInit = function () {
                    var mode = this.routeParams.get('mode');
                    this.mode = mode;
                    return undefined;
                };
                UserComponent.prototype.onSubmit = function () {
                    this.user = this.userForm.value;
                    this.userServices.saveUser(this.user).subscribe(function (res) { return console.log(res); });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        templateUrl: './app/userform.component.html',
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.RouteParams])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map