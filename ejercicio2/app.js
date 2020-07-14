(function () {

  'use strict';

  angular
    .module('NameCalculator', [])
    .controller('Controller', function ($scope) {
      $scope.name = "";
      $scope.value = 0;

      $scope.mostrarValor = function () {
          var valor = calcularValor($scope.name); // get the total value
          $scope.value = valor;
      };

      $scope.sayHelllo = function () {
        return "Hello Everybody";
      };

      function calcularValor(string) {
        var valorString = 0;
        for (var i = 0; i < string.length; i++) {
          valorString += string.charCodeAt(i);
        }
        return valorString;
      }
    });

})();
