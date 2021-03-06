System.register(['angular2/core', "./post.service", "angular2/http", "./spinner.component", "./users.service"], function(exports_1, context_1) {
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
    var core_1, post_service_1, http_1, spinner_component_1, users_service_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(postService, userService) {
                    this.postService = postService;
                    this.userService = userService;
                    this.comments = [];
                    this.users = [];
                    this.posts = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this.userService.getUsers().subscribe(function (us) { return _this.users = us; });
                };
                PostsComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    this.selectedPost = post;
                    console.log(post);
                    this.postService.getComments(post.id).subscribe(function (c) {
                        _this.comments = c;
                        console.log(_this.comments);
                    });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postLoading = true;
                    this.postService.getPosts(filter).subscribe(function (ps) {
                        _this.posts = ps;
                        _this.postLoading = false;
                    });
                };
                PostsComponent.prototype.changeUser = function (filter) {
                    this.selectedPost = null;
                    this.loadPosts(filter);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: './app/posts.component.html',
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "],
                        providers: [post_service_1.PostService, users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map