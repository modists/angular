(function ()
{
  'use strict';

  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope)
    {
         $scope.checkDishes = function ()
         {
            var numDishes = countDishes($scope.dishes);
            if (numDishes > 0 && numDishes <= 3)
               $scope.message = "Enjoy!";
            else if (numDishes > 3)
               $scope.message = "Too much!";
            else
               $scope.message = "Please enter data first";
         };

         function countDishes(string)
         {
            if (string == null)
               return 0;

            const dishes = string.split(',');
            let count = dishes.length;

            dishes.forEach( function(value, index, array)
            {
               array[index] = array[index].trim();
               if(!array[index])
                  count--;
            });

            console.log(dishes);
            console.log(count);
            return count;
         }
    }
})();
