// ************ CREATING OBJECTS PART 2************
/* var company = new Object();
company.name = "AIM";
company.ceo = new Object();
company.ceo.firstName = "Tai";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " 
+ company.ceo.firstName);

console.log(company["name"]);
//if you want to put a sentence you have to put it
//in brackets unless it is a js element. ********* like this:
company["$stock of company"] = 110
// **** You Can do it this way - console.log(company);
//that works or you can do this
console.log("Stock price is: " + company["$stock of company"]);

// YOU CAN ALSO DO THIS *********
var stockPropName = "stock of company";
company[stockPropName] = 110 */

// const { Console } = require("console");

/* // ******   BETTER WAY: Object Literal ********
var facebook = {
    name: "Facebbok",
    ceo: {
        firstName: "Tai",
        faveColor: "blue"
    }, 
    "stock of company": 110
};

console.log(facebook); */

//  ******* Functions are First-Class Data ********
// ******** Functions are Objects *********
/* function multiply (x, y) {
    return x * y; 
}
//console.log (multiply (5, 3)); **** Example 1 w/o bottom maybe ****
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function Factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc; 
} */

//var multiplyBy3 = makeMultiplier (3);
//var operation = makeMultiplier(10);
//console.log(operation(10)); // Example 2
// example 3
//var doubleAll = makeMultiplier (2);
//console.log(doubleAll(100));


// passing functions as arguments eExample 3
//function doOperationOn(x, operation) {
//    return operation (x);
//}

//var result = doOperationOn (5, multiplyBy3);
//console.log(result);
//result = doOperationOn(100, doubleAll);
//console.log(result);

// ********* PASssing Variables *********
//Example 1
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// Example 2  Pass by Reference (Copying by Value/ Reference)
// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);


// Pass by refernce vs by value
// function changePrimitive(primValue) {
// console.log("in changePrimitive...");
// console.log("before:");
// console.log(primValue);

// primValue = 5;
// console.log("after:");
// console.log(primValue);
// }

// var value = 7
// changePrimitive(value); //primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);

// Example 3
// function changeObject(objValue) {
//     console.log("in changeObject...");
//     console.log("before");
//     console.log(objValue);

//     objValue.x = 5
//     console.log("after");
//     console.log(objValue);
// }

// value = {x: 7};
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value); 


// // ******** Function constructors *********
// function Circle (radius) {
//     this.radius = radius;
// }
// Circle.prototype.getArea = 
// function () {
// return Math.PI * Math.pow(this.radius, 2)
// }

// var myCircle = new Circle(10); // new Object()
// console.log(myCircle);

// ******* Part 2   Object Literals and "this" *********
// Example 1
// var literalsCircle = { // new Object()
//     radius: 10,

//     getArea: function() {
//         console.log(this);
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalsCircle.getArea());

// Example 2
// var literalCircle = { // new Object()
//     radius: 10,

//     getArea: function() {
//         var self = this;
//         console.log(this);

//         var increaseRadius = function () {
//             self.radius = 20;
//         };
//         increaseRadius();
//         console.log(this.radius)
// ;
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };                          
  
// console.log(literalCircle.getArea());


// *********** Arrays ************
//Example 1
// var array = new Array();
// array[0] = "Tai";
// array[1] = 2;
// // array[3] = funtion name {
// //     console.log("Hello " + name);
// // };
// array[3] = {course: " HTML, CSS, JS"};

// console.log(array);
// console.log(array[1]);
// // array[2]("Tai"); or
// array [2](array[0]);
// console.log(array[3].course);

//********Short Hand Array Creation *********
        // Example 1
// var names = ["Tai", "Ghie", "Joel"];
// console.log(names);
        // Example 2
// var names = [
//     {name: "Tai"},
//     {name: "Ghie"}, 
//     "Joel"];
// console.log(names);
        // Example 3
// var names = ["Tai", "Ghie", "Joel"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }
        // Example 4

// var names = ["Tai", "Ghie", "Joel"];
// console.log(names);
// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// names[100] = "Rhea"; // you can add the next thing once 
// //the 1st part is complete
// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

//       Example 5 part 2 in lesson 50
// var names2 = ["tai", "Ghie", "Joel"];

// var myObj = {
//     name: "Tai",
//     course: "HTML/CSS/JS",
//     platform: "Coarsera"
// };
// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop])
// }  
// Example 5.1
// var names2 = ["tai", "Ghie", "Joel"];
// for (var name in names2) {
//         console.log("Hello " + names2[name])
//     } 

//     // this will not work because it represents an Object
// names2.greeting = "Hi";
// for (var name in names2) {
//     console.log("Hello " + names2[name])
// } 
// ********* CLosures *************
function makeMultiplier (multiplier) {
            // **** var mulitplier = 2;

function b () {
    console.log("Multiplier is: " + multiplier);
}
b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));