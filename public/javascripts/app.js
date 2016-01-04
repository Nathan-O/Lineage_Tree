var app = angular.module("lineageApp", ["ngResource", "ngRoute", "lineageApp.services", "lineageApp.controllers"]);

console.log("Sanity - app.js (angular)");

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
   $routeProvider
      .when("/", {
         templateUrl: "/partials/line-tree-index.html"
      })
      .when("/lineage-create", {
         templateUrl: "/partials/create-tree.html",
         // controller: "lineageCtrl"
      })
      .otherwise({redirectTo: '/'});

   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });
}]);










// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//    console.log("Inside app.config");
//
//    $routeProvider
//       .when('/', {
//          templateUrl: '/partials/posts-index.html',
//          controller: 'postsIndexCtrl'
//       })
//       .when('/login', {
//          templateUrl: '/partials/login.html',
//          controller: 'loginController'
//       })
//       .when('/logout', {
//          controller: 'logoutController'
//       })
//       .when('/sign-up', {
//          templateUrl: '/partials/sign-up.html',
//          controller: 'registerController'
//       })
//       .when('/user-show/:id', {
//          templateUrl: '/partials/user-show.html',
//          controller: 'UserShowCtrl'
//       })
//       .when('/users-all', {
//          templateUrl: '/partials/user-all.html',
//          controller: 'UserIndexCtrl'
//       })
//       .otherwise({redirectTo: '/'});
//
//    $locationProvider.html5Mode({
//       enabled: true,
//       requireBase: false
//    });
// }]);
