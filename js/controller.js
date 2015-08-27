var listControllers = angular.module('listControllers', []);

listControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.order = 'name';
  });
}]);

listControllers.controller('DetailsController', ['$scope', '$http', '$routeParams' function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
  });

}])
