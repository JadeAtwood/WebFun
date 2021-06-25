// function PizzaOven(){
//     var pizza = {};
//     var crust = ("deep dish", 'hand tossed', "thin");
//     var sauce = ("marinara", "white", "traditional");
//     var cheese = ("mozzerrella", "feta")
//     var toppings = ("pepperon", "olives", "onions", "mushrooms", "sausage");
//     console.log("the crust is " + crust)
//     console.log("the sauce is " + sauce)
//     console.log("the cheese is " + cheese)
//     console.log("the toppings are " + toppings)
//     return pizza;
// }
// var Pizza1 = PizzaOven(["deep dish"], ["traditional"], ["mozzerrella"], ["pepperoni"], ["sausage"]);
// console.log(Pizza1);

// var Pizza2 = PizzaOven(["hand tossed"], ["marinara"], ["mozzerrella, feta"], ['mushrooms, olives, onions']);
// console.log(Pizza2);

// var Pizza3 = PizzaOven(["deep dish"], ["white"], ["feta"], ['olives']);
// console.log(Pizza3);

// var Pizza4 = PizzaOven(["thin"], ["marinara"], ["mozzerrella"], ['sausage, pepperoni']);
// console.log(Pizza4);

function randomPizza() {  
    var randomPizza = {};
    var crust = ["deep dish", "hand tossed", "thin"];
    var randIndex = Math.floor(Math.random() * crust.length);
    console.log(crust[randIndex])  
    var sauce = ["marinara", "white", "traditional"];
    var randIndex = Math.floor(Math.random() * sauce.length);
    console.log(sauce[randIndex])  
    var cheese = ["mozzerrella", "feta"]
    randIndex = Math.floor(Math.random() * cheese.length);
    console.log(cheese[randIndex])  
    var toppings = ["pepperon", "olives", "onions", "mushrooms", "sausage"];
    var randIndex = Math.floor(Math.random() * toppings.length);
    console.log(toppings[randIndex])  ;
    return randomPizza;
}
randomPizza();
