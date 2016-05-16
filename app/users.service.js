System.register(['angular2/http', "angular2/core", 'rxjs/add/operator/map', "angular2/router"], function(exports_1, context_1) {
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
    var http_1, core_1, router_1;
    var UsersService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UsersService = (function () {
                function UsersService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.url = 'http://jsonplaceholder.typicode.com/users';
                }
                UsersService.prototype.getUsers = function () {
                    return this.http.get(this.url).map(function (res) { return res.json(); });
                };
                UsersService.prototype.getUser = function (userId) {
                    return this.http.get(this.userUrl(userId)).map(function (res) { return res.json(); });
                };
                UsersService.prototype.saveUser = function (user) {
                    return this.http.post(this.url, JSON.stringify(user)).map(function (res) { return res.json(); });
                };
                UsersService.prototype.updateUser = function (user) {
                    return this.http.put(this.userUrl(user.id), JSON.stringify(user)).map(function (res) { return res.json(); });
                };
                UsersService.prototype.deleteUser = function (userId) {
                    return this.http.delete(this.userUrl(userId)).map(function (res) { return res.json(); });
                };
                UsersService.prototype.userUrl = function (userId) {
                    return this.url + '/' + userId;
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});
//# sourceMappingURL=users.service.js.map