console.log("Angular Loaded");

var app = angular.module('omdb', []);

app.controller('MovieController', function($scope, $http){
  this.movieSearch = '';
  currentThis = this;
  this.formAction = function() {
    $http.get('https://www.omdbapi.com/?s=' + this.movieSearch + '&y=&r=json').
      then(function(response){
        $scope.movies = response.data.Search
    });
  };
  this.movieSelect = function(imdbID){
    $http.get('https://www.omdbapi.com/?i=' + imdbID + '&y=&plot=short&r=json').
      then(function(data){
        console.log(data);
        $scope.movie = data;
      });
  };

})
