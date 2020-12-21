// BUDGET CONTROLLER
var bugetController = (function () {})();

// UI CONTROLLER
var UIController = (function () {
  return {
    getInput: function () {
      return {
        type: document.querySelector(".add__type").value, // will be either increment or expence
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value,
      };
    },
  };
})();

// GLOBAL CONTROLLER

var controller = (function (budgetCtrl, UICntr) {
  var ctrlAddItem = function () {
    //  1. Get the filed input data
    var input = UICntr.getInput();
    console.log(input);

    //  2. Add the item to the budget
    //  3. Add the item to UI
    //  4. Calculate the budget
    //  5. Display the budget on UI

    console.log("it works");
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(bugetController, UIController);
