// BUDGET CONTROLLER
var bugetController = (function () {
  var Expence = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // var allExpences = [];
  // var allIncome = [];
  // var totalExpences = 0;

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;

      // [ 1 2 3 4]. next id = 5
      // [1 2 4 8], next id = 9
      // ID = lastID + 1

      // Create new id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        id = 0;
      }
      // Create new item based on the 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expence(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // push it into the allItem array {our data structure}
      data.allItems[type].push(newItem);

      // returen the new element
      return newItem;
    },
  };
})();

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
        type: document.querySelector(DOMstrings.inputType).value, // will be either income or expence
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    addListItem: function (obj, type) {
      // Create HTML string wo=ith placeholder text
      var html, newHtml;

      if (type === "inc") {
        html =
          '<div class="item clearfix" id="income-%id%"> <div class="item__description">%discription%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      } else if (type === "exp") {
        html =
          ' <div class="item clearfix" id="expense-%id%"> <div class="item__description">%discription%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }

      //  Replace the placeholder text with some actual data
      newHtml = html.replace("%id%", obj.id);
      // Insert the HTML into the dom
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
  v;

  var ctrlAddItem = function () {
    var input, newItem;
    //  1. Get the filed input data
    input = UICntr.getInput();
    console.log(input);

    //  2. Add the item to the budget
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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
