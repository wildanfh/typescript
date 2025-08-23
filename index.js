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
// Function with a rest parameter and type annotations
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
;
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true));
// Arrow function
var addWithArrow = function (num1, num2) { return num1 + num2; };
console.log(addWithArrow(5, 10));
// Anonymous function
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(20, 30));
// void & never
// void
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
;
function noReturnValue() {
    // This function doesn't return a value (implicity returns undefined).
}
;
// never
function ThrowError(message) {
    throw new Error(message);
}
;
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
;
// Union Type
var myVar;
myVar = "Moin!"; // Valid assignment
console.log(myVar);
myVar = 20; // Valid assignment
console.log(myVar);
// Literal Types
var direction;
// In function parameter
function setColor(color) {
    // ...
}
;
// Nullable Types
var username = "Anies"; // The variable can hold a string or null
var age = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === void 0) { username = null; }
    if (username === null) {
        console.log("Assalamualaikum Habibi");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
;
greetUser("Anies"); // Output: Hello, Anies!
greetUser(null); // Output: Assalamualaikum, Habibi!
greetUser();
function greetUserbyTime(username) {
    var hour = new Date().getHours();
    var waktu;
    if (hour < 12) {
        waktu = "pagi";
    }
    else if (hour < 18) {
        waktu = "siang";
    }
    else {
        waktu = "malam";
    }
    if (username == null || username.trim() === "") {
        console.log("Assalamualaikum Habibi, selamat ".concat(waktu, " \uD83C\uDF38"));
    }
    else {
        console.log("Assalamualaikum ".concat(username, ", selamat ").concat(waktu, "!"));
    }
}
// Contoh pemakaian
greetUserbyTime("Wildan"); // Assalamualaikum Wildan, selamat pagi!
greetUserbyTime(null); // Assalamualaikum Habibi, selamat pagi 🌸
greetUserbyTime(); // Assalamualaikum Habibi, selamat pagi 🌸
// Use the type alias for string
var myName = "Wildan";
// Use the type alias for the union type
var myValue = 10;
var wildan = {
    name: "Wildan",
    age: 20,
    email: "wildanf2005@gmail.com",
};
var rifka = {
    name: "Rifka",
    age: 18,
};
console.log(wildan);
console.log(rifka);
var jono = {
    name: "Jono",
    age: 30,
    email: "jono@example.com",
};
var indro = {
    name: "Indro",
    age: 25,
};
console.log(jono);
console.log(indro);
var person = {
    name: 'John Doe',
    age: 27,
    address: '123 Main St',
    phone: '123-456-799',
};
// Type Annotations With Arrays
// Annotating an array of strings
var fruits = ["apple", "banana", "cherry"];
// Using a loop to process each element in the array
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit : ".concat(fruits[i].toUpperCase()));
}
// Type Annotations With Multidimensional Arrays
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = ["A", "B", "C"];
var arrayThree = [1, 2, 3, 4, "A", "B", "C"];
// Tuple
// Defining a tuple type
var article = [11, "Title One", true];
// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];
// Trying to push a new element into a tuple (will result in an error)
// article.push(100);
console.log(article);
// Destructuring the tuple into individual variables
var id = article[0], title = article[1], published = article[2];
console.log(id);
console.log(title);
console.log(published);
// Enums
var Tage;
(function (Tage) {
    Tage[Tage["Sonntag"] = 0] = "Sonntag";
    Tage[Tage["Montag"] = 1] = "Montag";
    Tage[Tage["Dienstag"] = 2] = "Dienstag";
    Tage[Tage["Mittwoch"] = 3] = "Mittwoch";
    Tage[Tage["Donnerstag"] = 4] = "Donnerstag";
    Tage[Tage["Freitag"] = 5] = "Freitag";
    Tage[Tage["Samstag"] = 6] = "Samstag";
})(Tage || (Tage = {}));
var today = Tage.Samstag;
console.log("Today is ".concat(Tage[today]));
var John = {
    name: "John",
    age: 30,
};
// Create an object that adheres to the 'Person' interface
var Sarah = {
    name: "Sarah",
    age: 25,
    greet: function (message) {
        console.log("".concat(this.name, " says : ").concat(message));
    },
};
Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!
// Create an object 'userSettings' that adheres to the merged 'Settings' interface
var userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};
var Labrador = /** @class */ (function () {
    function Labrador() {
        this.type = "dog";
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var Beagle = /** @class */ (function () {
    function Beagle() {
    }
    Beagle.prototype.bark = function () {
        console.log("Woof!");
    };
    return Beagle;
}());
var labrador = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
labrador.bark();
