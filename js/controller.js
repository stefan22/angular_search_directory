var myApp = angular.module('myApp', []);

myApp.controller('ListController', ['$scope', function($scope) {
  $scope.artists = [
    {
      "name": "Stefan",
     "company": "Acer Corp"
   },
     {
       "name": "Mike",
       "company": "IBM"
     },
     {
       "name": "Tony",
       "company": "Hewlett Packard"
     },
     {
       "name":"Curtis",
       "company": "Nasa"
     },
     {
       "name": "Frank",
       "company": "Silicon Graphics"
     }
  ]
}]);
