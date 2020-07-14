(function () {

  'use strict';

  angular
    .module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
      $scope.name = "Leo";
      $scope.sayHelllo = function () {
        return "Hello Everybody";
      };
    });

})();
