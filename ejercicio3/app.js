(function () {

  'use strict'; // es más riguroso al analizar errores

  angular
    .module('DIapp', [])
    .controller('Controller', Controller);

    //De esta manera el interprete se asegura de utilizar los parámetros
    //correctamente y funcionarán al minificar el código
    Controller.$inject = ['$scope', '$filter'];

    function Controller ($scope, $filter) {
      $scope.name = "Leonardo";

      $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      }
    }

})();

/* MINIFICATION
  - Process of reducing the size if JS
  - Removes extra characters
  - Faster in production mode
*/
