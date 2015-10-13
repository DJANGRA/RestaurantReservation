/**
 * Created by jangra on 10/12/15.
 */

var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'index.html'
        })
        .when('/about',{
            templateUrl: 'About.html'
        })
        .when('/signup',{
            templateUrl: 'SignUp.html'
        })
        .when('/login',{
            templateUrl: 'Login.html'
        })
        .when('/contactus',{
            templateUrl: 'ContactUs.html'
        });

});
app.controller('cfgController',function($scope){

    /*
     Here you can handle controller for specific route as well.
     */
});

//var app = angular.module('reservation', [ ]);

var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
};



/*function to check userid & password*/
//app.controller('validateCtrl', function($scope) {
//    $scope.user = 'John Doe';
//    $scope.email = 'john.doe@gmail.com';
//});


$(document).ready(main);

