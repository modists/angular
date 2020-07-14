(function () {

  'use strict';

  angular
    .module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {

      $scope.name = "Leo";
      $scope.stateOfMocha = "molesto";

      $scope.sayHelllo = function () {
        return "Hello Everybody";
      };

      $scope.changeMocha = function () {
        if($scope.stateOfMocha === "triste")
          $scope.stateOfMocha = "molesto";
        else
          $scope.stateOfMocha = "triste";  
      };
    });

})();
