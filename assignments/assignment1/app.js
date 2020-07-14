(function () {

  'use strict';

  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {

      $scope.checkDishes = function () {

        
          var numDishes = countDishes($scope.dishes);

          if (numDishes > 0 && numDishes <= 3)
            $scope.message = "Enjoy!";
          else if (numDishes > 3)
            $scope.message = "Too much!";
          else
            $scope.message = "Please enter data first";
      };

      function countDishes(string) {

        if (string == null)
          return 0;

        const dishes = string.split(',');

        dishes.forEach( function(value, index, array) {
          if (!Boolean(value.trim()))
             dishes.splice(index, 1);
        });
        console.log(dishes);
        return dishes.length;
      }

    }

})();
