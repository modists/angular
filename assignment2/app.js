(function ()
{
  'use strict';

 angular
   .module('ShoppingListCheckOff', [])
   .controller('ToBuyController', ToBuyController)
   .controller('AlreadyBoughtController', AlreadyBoughtController)
   .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

   ToBuyController.$inject = ['ShoppingListCheckOffService'];
   function ToBuyController(ShoppingListCheckOffService) {
      var compras = this;
      compras.shoppingList = ShoppingListCheckOffService.getCompras();
      compras.comprar = function (index) {
         ShoppingListCheckOffService.comprar(index);
         compras.message = ShoppingListCheckOffService.getFlag();
      };
   }

   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
   function AlreadyBoughtController(ShoppingListCheckOffService) {
      var comprado = this;
      comprado.shoppingList = ShoppingListCheckOffService.getComprado();
      comprado.message = function () {
         return ShoppingListCheckOffService.getFlag2();
      };
   }

   function ShoppingListCheckOffService() {
      var service = this;

      var shoppingList1 = [
         {
            name: "cookies",
            quantity: "10"
         },
         {
           name: "donuts",
           quantity: "7"
         },
         {
           name: "candies",
           quantity: "25"
         },
         {
           name: "bananas",
           quantity: "13"
         },
         {
           name: "apples",
           quantity: "9"
         },
     ];

     var shoppingList2 = [];
     var flag = false;
     var flag2 = true;

     service.getCompras = function () {
       return shoppingList1;
     };
     service.getComprado = function () {
      return shoppingList2;
     };
     service.getFlag = function () {
       return flag;
     };
     service.getFlag2 = function () {
      return flag2;
     };

     service.comprar = function (index) {
        shoppingList2.push(shoppingList1[index]);
        shoppingList1.splice(index, 1);
        if (shoppingList1.length < 1)
           flag = true;
        if (shoppingList2.length >= 1)
           flag2 = false;
     };
   }

})();
