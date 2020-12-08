// BUDGET CONTROLLER
var bugetController = (function () {})();

// UI CONTROLLER
var UIController = (function () {
  // some code
})();

// GLOBAL CONTROLLER
var controller = (function (budgetCtrl, UICntr) {
  document.querySelector(".add__btn").addEventListener("click", function () {
    console.log("button was clicked");

   //  1. Get the filed input data

   // 2. Add the item to the budget

   //  3. Add the item to UI

   //  4. Calculate the budget

   //  5. Display the budget on UI

  });
})(bugetController, UIController);
