console.log("Angular Loaded");

var app = angular.module('omdb', []);

app.controller('MovieController', function($scope, $http){
  this.movieSearch = '';
  currentThis = this;
  this.formAction = function() {
    $http.get('http://www.omdbapi.com/?t=' + this.movieSearch + '&y=&plot=short&r=json').
      then(function(response){
        currentThis.movieData = response.data;
        console.log(currentThis.movieData);
        $scope.movieTitle = currentThis.movieData.Title
        $scope.plot = currentThis.movieData.Plot
        $scope.actors = currentThis.movieData.Actors
    })
  }

})
