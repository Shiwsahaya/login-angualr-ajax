var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'view/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});


app.controller('myCtrlpost', ['$scope', '$http', function($scope, $http) {

    $scope.getUsers = function() {
        var temp = {
            "name": $scope.name,
            "password": $scope.password
        };

        $http({
            method: "POST",
            url: "http://localhost:3000/users",
            data: JSON.stringify(temp)
        }).then(function(response) {
            console.log(response);
        }).then(function(response) {});
    }

    onSubmit = function() {
        console.log("here");
        console.log("this.userModel");
    }
}]);