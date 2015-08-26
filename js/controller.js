var myApp = angular.module('myApp', []);

myApp.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
  });
}]);
