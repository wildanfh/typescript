var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var myCar = {
    brand: "Toyota",
    model: "Camry",
};
// Type Alias: Does not support declaration merging.
// 4. Extensibility:
// Interface: Use when you need to define the shape of objects and also when you need to implement them in classes. They are more suitable for defining contracts that classes must adhere to.
// Type Alias: Use when you want to create custom types that can be combined using union types, intersection types, or when defining complex types.
// 5. Readability and Style:
// Interface: Preferred when defining shapes of objects, especially for public APIs, as they convey the intent clearly. They also work well with code editors' IntelliSense for auto-completion and documentation generation.
// Type Alias: Useful for defining unions, intersections, and more complex types. They are often used to give descriptive names to specific combinations of types.
// Class Type annotations
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        // constructor paramater type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "ID : ".concat(this.id, ", Name : ").concat(this.name, ", Price : \u20AC").concat(this.price);
    };
    return Product;
}());
// Create an instance of the Product class
var product1 = new Product(1, "Widget", 10.0);
// Access class properties and call a method
console.log(product1.getProductInfo());
// class access modifiers:
// 1. public
var MyClassPublic = /** @class */ (function () {
    function MyClassPublic(name) {
        this.name = name;
    }
    return MyClassPublic;
}());
var MyClassPublicNew = /** @class */ (function () {
    function MyClassPublicNew(name) {
        this.name = name;
    }
    return MyClassPublicNew;
}());
var instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property
var instancePublicNew = new MyClassPublicNew("Aziz");
console.log(instancePublicNew.name);
// 2. private
var MyClassPrivate = /** @class */ (function () {
    function MyClassPrivate(secret) {
        this.secret = secret;
    }
    MyClassPrivate.prototype.revealSecret = function () {
        console.log(this.secret); // Accessing the private property from within the class
    };
    return MyClassPrivate;
}());
var myClassPrivateNew = /** @class */ (function () {
    function myClassPrivateNew(secret) {
        this.secret = secret;
    }
    myClassPrivateNew.prototype.revealSecret = function () {
        console.log(this.secret);
    };
    return myClassPrivateNew;
}());
var instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property
var instancePrivateNew = new myClassPrivateNew("My secret new");
instancePrivateNew.revealSecret();
// 3. protected
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.familyName = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.introduceFamily = function () {
        console.log("Our family name is ".concat(this.familyName));
    };
    return Child;
}(Parent));
var myParent = new Parent("Ling");
var child = new Child("Johnson");
// console.log(parent.familyName); // This would result in an error because familyName is protected
child.introduceFamily(); // This is a valid way to access the protected property
// Class accessors
var ProductExAccessors = /** @class */ (function () {
    function ProductExAccessors(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0; // default price
    }
    Object.defineProperty(ProductExAccessors.prototype, "price", {
        get: function () {
            return this._price;
        },
        // 'public' setter for price
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductExAccessors.prototype.getProductInfo = function () {
        return "ID : ".concat(this.id, ", Name : ").concat(this.name, ", Price : \u20AC").concat(this._price);
    };
    return ProductExAccessors;
}());
// Create an instance of the ProductExAccessors class
var productEx = new ProductExAccessors(1, "Widget");
console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
// Use the 'setter' to update the price
productEx.price = 20.0;
console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
// Attempting to set a negative price triggers the setter logic
productEx.price = -5; // Price cannot be negative.
