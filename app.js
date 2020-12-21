// BUDGET CONTROLLER
var bugetController = (function () {})();

// UI CONTROLLER
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either increment or expence
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstring: function () {
      return DOMstrings;
    },
  };
})();

// GLOBAL CONTROLLER

var controller = (function (budgetCtrl, UICntr) {
  var setupEventListeners = function () {
    var DOM = UICntr.getDOMstring();
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

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

  return {
    init: function () {
      console.log("Application has started");
      setupEventListeners();
    },
  };
})(bugetController, UIController);

controller.init();
