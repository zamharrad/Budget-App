var bugetController = (function(){

    var x = 23;

    var add = function(a){
        return a + x;
    }

    return {
        publicTest: function(b){
            return add(b);
        }
    }

})();

var UIController = (function(){
    // some code
})();


var Controller = (function(budgetCtrl,UICntr){

    var c = budgetCtrl.publicTest(5);

    return {
        anotherPublic : function(){
            console.log(c)
        }
    }

})(bugetController,UIController);