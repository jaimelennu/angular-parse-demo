/*
    github-app.js
    very quick and dirty github API demo

    To get all your repos on GitHub, GET this URL:
        https://api.github.com/users/your-github-username/repos
 */

"use strict";

angular.module('GitHubApp', [])
    .controller('GitHubController', function($scope, $http) {
        $scope.userName = 'drstearns';
        $scope.getRepos = function() {

            //add code here
            $http.get('https://api.github.com/users/' + $scope.userName +'/repos')
                .success(function(data)) {
                    //success
                })
                .error(function(err)) {
                    console.log(err);
                })
        };
    });