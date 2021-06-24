function PizzaOven(){
    var pizza = {};
    var crust = ("deep dish", 'traditional', "thin");
    var sauce = ("marinara", "white", "traditional");
    var cheese = ("mozzerrella", "feta")
    var toppings = ("pepperon", "olives", "onions", "mushrooms", "sausage");
        console.log("the crust is " + crust)
        console.log("the sauce is " + sauce)
        console.log("the cheese is " + cheese)
        console.log("the crust is " + crust)
        return pizza;
}
var Pizza1 = PizzaOven(["deep dish"], ["marinara"], ["mozzerrella"], ["pepperoni"]);
console.log(Pizza1);

var Pizza2 = PizzaOven(["hand tossed"], ["marinara"], ["mozzerrella, feta"], ['mushrooms, olives, onions']);
console.log(Pizza2);

var Pizza3 = PizzaOven(["deep dish"], ["white"], ["feta"], ['olives']);
console.log(Pizza3);

var Pizza4 = PizzaOven(["thin"], ["marinara"], ["mozzerrella"], ['sausage, pepperoni']);
console.log(Pizza4);

var Pizza5 = PizzaOven(["deep dish"], ["marinara"], ["mozzerrella"], ['']);
console.log(Pizza5);