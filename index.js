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
// class static member
var ProductStaticMembers = /** @class */ (function () {
    function ProductStaticMembers(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductStaticMembers.generateNextId = function () {
        return ProductStaticMembers.nextId++;
    };
    ProductStaticMembers.prototype.getProductInfo = function () {
        return "ID : ".concat(this.id, ", Name : ").concat(this.name);
    };
    // 'private' property 
    ProductStaticMembers.nextId = 1;
    return ProductStaticMembers;
}());
// Generate unique IDs for products using the static method
var product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
var product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget
// class implement Interface
var ProductImplementInterface = /** @class */ (function () {
    function ProductImplementInterface(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductImplementInterface.generateNextId = function () {
        return ProductImplementInterface.nextId++;
    };
    ProductImplementInterface.prototype.getProductInfo = function () {
        return "ID : ".concat(this.id, ", Name : ").concat(this.name);
    };
    // 'private' property
    ProductImplementInterface.nextId = 1;
    return ProductImplementInterface;
}());
// Generate unique IDs for products using the static method
var product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
var product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
// ID: 1, Name: Widget
console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget
// abstract classes and ProductStaticMembers
var AbstractItem = /** @class */ (function () {
    function AbstractItem(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractItem.generateNextId = function () {
        return AbstractItem.nextId++;
    };
    AbstractItem.nextId = 1;
    return AbstractItem;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id, name) {
        return _super.call(this, id, name) || this;
    }
    Item.prototype.getItemInfo = function () {
        return "ID : ".concat(this.id, ", Name : ").concat(this.name);
    };
    return Item;
}(AbstractItem));
var item1 = new Item(AbstractItem.generateNextId(), "Widget");
var item2 = new Item(AbstractItem.generateNextId(), "Gadget");
console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget
// Polymorphism & Method Override
// Define an abstract class
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractEntity.generateNextId = function () {
        return AbstractEntity.nextId++;
    };
    AbstractEntity.nextId = 1;
    return AbstractEntity;
}());
// Create a concrete subclass
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(id, name) {
        return _super.call(this, id, name) || this;
    }
    Entity.prototype.getEntityInfo = function () {
        return "ID : ".concat(this.id, ", Name : ").concat(this.name);
    };
    return Entity;
}(AbstractEntity));
// Create another concrete subclass
var AnotherEntity = /** @class */ (function (_super) {
    __extends(AnotherEntity, _super);
    function AnotherEntity(id, name) {
        return _super.call(this, id, name) || this;
    }
    AnotherEntity.prototype.getEntityInfo = function () {
        return "ID : ".concat(this.id, ", Name : ").concat(this.name, ", Additional Info : ...");
    };
    return AnotherEntity;
}(AbstractEntity));
// Generate unique IDs for entities using the static method
var entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
var entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...
// Generics
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
var numValue = returnType(100);
var strValue = returnType("Elzero");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number Value : ".concat(numValue));
console.log("String Value : ".concat(strValue));
console.log("Boolean Value : ".concat(boolValue));
console.log("Array Value : ".concat(arrValue));
// Generics Multiple types
// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100)); // Returns: 100 (number)
console.log(returnTypeEx("Elzero")); // Returns: "Elzero" (string)
// Arrow Function with Generics `returnTypeArrowSyntax`
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(100)); // Returns: 100 (number)
console.log(returnTypeArrowSyntax("Elzero")); // Returns: "Elzero" (string)
// Generic Function `testType`
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(100));
// Returns: "The Value Is 100 And Type Is number"
console.log(testType("Elzero"));
// Returns: "The Value Is Elzero And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second Value ").concat(valueTwo);
}
// Returns: "The First Value Is Osama And Second Value 100"
console.log(multipleTypes("Osama", 100));
// Returns: "The First Value Is Elzero And Second Value true"
console.log(multipleTypes("Elzero", true));
// Generics classes
// Generic Class `User`
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
// Creating an instance of `User` with a specific type parameter (string) 
var userOne = new User("Elzero");
console.log(userOne.value); // Outputs: "Elzero"
userOne.show("Message"); // Outputs: "Message - Elzero"
// Creating an instance of `User` with a type parameter that can be a number or a string
var userTwo = new User(100);
// Outputs: 100
console.log(userTwo.value);
// Outputs: "Message - 100"
userTwo.show("Message");
// Generic Class `Collection`
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    // Method to add an item of type 'T' to the collection
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
// Creating an instance of `Collection` with type parameter `Book`
var itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Creating an instance of `Collection` with type parameter `Game`
var itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
// Type Assertions
var data = "Hadeh";
// Type assertion to treat "data" as a string
// console.log((data as string).repeat(3));
