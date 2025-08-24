const hello = (name: string) => {
  console.log(`Hello ${name}`);
};

hello("Wildan");

let myNumberExOne: number = 42;
let myStringExOne: string = "Hello Typescript";

console.log("My Number Is", myNumberExOne);
console.log("My String Is", myStringExOne);

let greeting = "Hello, world!";
console.log(greeting);

let myVariable : any = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable);


// Type Annotations With Objects
let personExOne : {
  name : string;
  age : number;
  jobTitle? : string;
  address : {
    street : string;
    city: string;
  };
};

personExOne = {
  name : "Wildan",
  age : 20,
  jobTitle: "Software Developer",
  address : {
    street : "Am Rollberg 40",
    city : "Berlin",
  },
};

// another method. Define an object type with type Annotations

let personExTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name : "Wildan",
  age : 20,
  jobTitle: "Software Developer",
  address : {
    street : "Am Rollberg 40",
    city : "Berlin",
  },
};

// Annotations with function. Function to calculate the area of a rectangle.

function calculateRectangleArea(long : number, width : number) : number {
  return long * width;
};

// Calling the function with valid arguments

const long = 5;
const width = 4;
const area = calculateRectangleArea(long, width);
console.log(`The area of the rectangle is : ${area}`);

// Optional And Default Parameter

function greetOptional(name : string, age? : number) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old`);
  } else {
    console.log(`Hello, ${name}!`);
  }
};

greetOptional("Wildan");
greetOptional("Dzaki", 12);

// Default Parameters:
function greetDefault(name: string, age: number = 20) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("Izza");
greetDefault("Rifka", 18);

// Function with a rest parameter and type annotations
function addAll(...nums : number[]) : number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
};

// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true));

// Arrow function
const addWithArrow = (num1 : number, num2 : number) : number => num1 + num2;
console.log(addWithArrow(5, 10));

// Anonymous function
const add = function(num1 : number, num2 : number) : number {
  return num1 + num2;
};
console.log(add(20, 30));

// void & never
// void
function greet(name : string) : void {
  console.log(`Hello, ${name}!`);
};

function noReturnValue() : void {
  // This function doesn't return a value (implicity returns undefined).
};

// never
function ThrowError(message : string) : never {
  throw new Error(message);
};

function infiniteLoop() : never {
  while (true) {
    // This function never exits (infinite loop).
  }
};

// Union Type
let myVar : string | number;

myVar = "Moin!"; // Valid assignment
console.log(myVar);

myVar = 20; // Valid assignment
console.log(myVar);

// Literal Types
let direction : "left" | "right" | "up" | "down";

// In function parameter
function setColor(color : "red" | "green" | "blue") {
  // ...
};

// Nullable Types
let username : string | null = "Anies"; // The variable can hold a string or null

let age : number | null = null; // The variable can hold a number or null

function greetUser(username : string | null = null) {
  if(username === null) {
    console.log("Assalamualaikum Habibi");
  } else {
    console.log(`Hello, ${username}!`);
  }
};

greetUser("Anies"); // Output: Hello, Anies!
greetUser(null);     // Output: Assalamualaikum, Habibi!
greetUser();

function greetUserbyTime(username?: string | null) {
  const hour = new Date().getHours();
  let waktu: string;

  if (hour < 12) {
    waktu = "pagi";
  } else if (hour < 18) {
    waktu = "siang";
  } else {
    waktu = "malam";
  }

  if (username == null || username.trim() === "") {
    console.log(`Assalamualaikum Habibi, selamat ${waktu} 🌸`);
  } else {
    console.log(`Assalamualaikum ${username}, selamat ${waktu}!`);
  }
}

// Contoh pemakaian
greetUserbyTime("Wildan"); // Assalamualaikum Wildan, selamat pagi!
greetUserbyTime(null);     // Assalamualaikum Habibi, selamat pagi 🌸
greetUserbyTime();         // Assalamualaikum Habibi, selamat pagi 🌸

// Type Alias
// Define a type alias for string
type MyString = string;

// Use the type alias for string
let myName : MyString = "Wildan";

// Define a type alias for a union of string or number
type MyStringOrNumber = string | number;

// Use the type alias for the union type
let myValue : MyStringOrNumber = 10;

// with object

type Person = {
  name : string;
  age : number;
  email? : string;
}

const wildan : Person = {
  name : "Wildan",
  age : 20,
  email : "wildanf2005@gmail.com",
};

const rifka: Person = {
  name: "Rifka",
  age: 18,
};

console.log(wildan);
console.log(rifka);

// another example
type Employee = {
  name : string;
  age : number;
  email? : string;
};

const jono : Employee = {
  name: "Jono",
  age: 30,
  email: "jono@example.com",
};

const indro : Employee = {
  name: "Indro",
  age: 25,
};

console.log(jono);
console.log(indro);

// Intersection Type
type FirstType = {
  name : string;
  age : number;
};

type SecondType = {
  address : string;
  phone : string;
};

type CombinedType = FirstType & SecondType;

const person : CombinedType = {
  name : 'John Doe',
  age : 27,
  address : '123 Main St',
  phone : '123-456-799',
};

// Type Annotations With Arrays

// Annotating an array of strings
let fruits : string[] = ["apple", "banana", "cherry"];

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit : ${fruits[i].toUpperCase()}`);
}

// Type Annotations With Multidimensional Arrays
let arrayOne : number[] = [1, 2, 3, 4, 5];
let arrayTwo : string[] = ["A", "B", "C"];
let arrayThree : (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// Tuple

// Defining a tuple type
let article : readonly [number, string, boolean] = [11, "Title One", true];

// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];

// Trying to push a new element into a tuple (will result in an error)
// article.push(100);

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);

// Enums

enum Tage {
  Sonntag,
  Montag,
  Dienstag,
  Mittwoch,
  Donnerstag,
  Freitag,
  Samstag
}

const today: Tage = Tage.Samstag;

console.log(`Today is ${Tage[today]}`);

// Interface

interface PersonEx1 {
  name : string;
  age : number;
}

const John : PersonEx1 = {
  name : "John",
  age : 30,
};

// Interface Method And Parameters

// Define an interface 'Person' with a method 'greet'
interface PersonEx2 {
  name : string;
  age : number;
  greet(message : string) : void;
}

// Create an object that adheres to the 'Person' interface
const Sarah : PersonEx2 = {
  name : "Sarah",
  age : 25,
  greet(message : string) {
    console.log(`${this.name} says : ${message}`);
  },
};

Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!

// ReOpen The Interface And Use Cases

// Homepage Interface Declaration
interface Settings {
  readonly theme : boolean;
  font : string;
}

// Articles Page Interface Reopening
interface Settings {
  sidebar : boolean;
}

// Contact Page Interface Reopening
interface Settings {
  external : boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings : Settings = {
  theme : true,
  font : "Open Sans",
  sidebar : false,
  external : true,
};

// built-in Interface
// const imgElement : HTMLImageElement = document.createElement("img");
// imgElement.src = "image.jpeg";
// imgElement.alt = "My Image";

// if (imgElement.complete) {
//   console.log(`Image dimensions : ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
// } else {
//   imgElement.addEventListener("load", () => {
//     console.log(`Image dimensions : ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
//   });
// }

// Interface vs. Type Aliases

// 1. Declaration Syntax
interface PersonExInterface {
  name : string;
  age : number;
}

type PersonExType = {
  name : string;
  age : number;
};
interface AnimalExInterface {
  type : string;
}

interface Dog extends AnimalExInterface {
  bark() : void;
}

class Labrador implements Dog {
  type : string = "dog";
  bark() {
    console.log("Woof!");
  }
}

// 2. Extending and Implementing:

interface Animal {
  type : string;
}

interface Dog extends Animal {
  bark() : void;
}

class Beagle implements Dog {
  type : "dog";
  bark() {
    console.log("Woof!");
  }
}

type AnimalExType = {
  type : string;
}

type Monkey = AnimalExType & {
  bark() : void;
};

const labrador : Monkey = {
  type : "monkey",
  bark() {
    console.log("Woof!");
  },
};

labrador.bark();

// 3. Compability
interface Car {
  brand : string;
}

interface Car {
  model : string;
}

const myCar : Car = {
  brand : "Toyota",
  model : "Camry",
};

// Type Alias: Does not support declaration merging.

// 4. Extensibility:

// Interface: Use when you need to define the shape of objects and also when you need to implement them in classes. They are more suitable for defining contracts that classes must adhere to.
// Type Alias: Use when you want to create custom types that can be combined using union types, intersection types, or when defining complex types.

// 5. Readability and Style:

// Interface: Preferred when defining shapes of objects, especially for public APIs, as they convey the intent clearly. They also work well with code editors' IntelliSense for auto-completion and documentation generation.
// Type Alias: Useful for defining unions, intersections, and more complex types. They are often used to give descriptive names to specific combinations of types.

// Class Type annotations

class Product {
  id : number;
  name : string;
  price : number;
  
  constructor(id : number, name : string, price : number) {
    // constructor paramater type annotations
    this.id = id;
    this.name = name;
    this.price = price;
  }
  
  getProductInfo() : string {
    return `ID : ${this.id}, Name : ${this.name}, Price : €${this.price}`;
  }
}

// Create an instance of the Product class
const product1 = new Product(1, "Widget", 10.0);

// Access class properties and call a method
console.log(product1.getProductInfo());

// class access modifiers:

// 1. public
class MyClassPublic {
  public name : string;
  
  constructor(name : string) {
    this.name = name;
  }
}

class MyClassPublicNew {
  constructor(public name : string) {}
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property

const instancePublicNew = new MyClassPublicNew("Aziz");
console.log(instancePublicNew.name);

// 2. private
class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
}

class myClassPrivateNew {
  constructor(private secret : string) {}
  
  revealSecret() {
      console.log(this.secret);
  }
}

const instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property

const instancePrivateNew = new myClassPrivateNew("My secret new");

instancePrivateNew.revealSecret();

// 3. protected

class Parent {
  protected familyName : string;
  
  constructor(name : string) {
    this.familyName = name;
  }
}

class Child extends Parent {
  introduceFamily() {
    console.log(`Our family name is ${this.familyName}`);
  }
}

const myParent = new Parent("Ling");
const child = new Child("Johnson");

// console.log(parent.familyName); // This would result in an error because familyName is protected
child.introduceFamily(); // This is a valid way to access the protected property

// Class accessors
  class ProductExAccessors {
    private _price : number;
    
    constructor(private id : number, private name : string) {
      this._price = 0; // default price
    }
    
    get price() : number {
      return this._price;
    }
    
    // 'public' setter for price
    set price(newPrice : number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.")
      }
    }
    
    getProductInfo() : string {
      return `ID : ${this.id}, Name : ${this.name}, Price : €${this._price}`;
    }
  }
  
  // Create an instance of the ProductExAccessors class
  const productEx = new ProductExAccessors(1, "Widget");
  
  console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
  
  // Use the 'setter' to update the price
  productEx.price = 20.0;
  
  console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
  
  // Attempting to set a negative price triggers the setter logic
  productEx.price = -5; // Price cannot be negative.
