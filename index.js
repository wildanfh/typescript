var hello = function (name) {
    console.log("Hello ".concat(name));
};
hello("Wildan");
var myNumberExOne = 42;
var myStringExOne = "Hello Typescript";
console.log("My Number Is", myNumberExOne);
console.log("My String Is", myStringExOne);
var greeting = "Hello, world!";
console.log(greeting);
var myVariable = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable);
// Type Annotations With Objects
var personExOne;
personExOne = {
    name: "Wildan",
    age: 20,
    jobTitle: "Software Developer",
    address: {
        street: "Am Rollberg 40",
        city: "Berlin",
    },
};
// another method. Define an object type with type Annotations
var personExTwo = {
    name: "Wildan",
    age: 20,
    jobTitle: "Software Developer",
    address: {
        street: "Am Rollberg 40",
        city: "Berlin",
    },
};
// Annotations with function. Function to calculate the area of a rectangle.
function calculateRectangleArea(long, width) {
    return long * width;
}
;
// Calling the function with valid arguments
var long = 5;
var width = 4;
var area = calculateRectangleArea(long, width);
console.log("The area of the rectangle is : ".concat(area));
// Optional And Default Parameter
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old"));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
;
greetOptional("Wildan");
greetOptional("Dzaki", 12);
// Default Parameters:
function greetDefault(name, age) {
    if (age === void 0) { age = 20; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greetDefault("Izza");
greetDefault("Rifka", 18);
