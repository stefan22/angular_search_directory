var listController = angular.module('ListController', []);

listController.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.order = 'name';


  });
}]);
