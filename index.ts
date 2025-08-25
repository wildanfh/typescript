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
  
// class static member
  
  class ProductStaticMembers {
    // 'private' property 
    private static nextId : number = 1;
    
    constructor(private id : number, private name : string) {}
    
    static generateNextId() : number {
      return ProductStaticMembers.nextId++;
    }
    
    getProductInfo() : string {
      return `ID : ${this.id}, Name : ${this.name}`;
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
  
  const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
  
  console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
  console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget
  
  // class implement Interface
  class ProductImplementInterface {
    // 'private' property
    private static nextId : number = 1;
    
    constructor(private id : number, private name : string) {}
    
    static generateNextId() : number {
      return ProductImplementInterface.nextId++;
    }
    
    getProductInfo() : string {
      return `ID : ${this.id}, Name : ${this.name}`;
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
  
  const product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
  
  // ID: 1, Name: Widget
  console.log(product1implement.getProductInfo());
  console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget
  
// abstract classes and ProductStaticMembers
abstract class AbstractItem {
  private static nextId : number = 1;
  
  constructor(public id : number, protected name : string) {}
  
  static generateNextId() : number {
    return AbstractItem.nextId++;
  }
  
  abstract getItemInfo();
}
class Item extends AbstractItem {
  constructor(id : number, name : string) {
    super(id, name);
  }
  
  getItemInfo() : string {
    return `ID : ${this.id}, Name : ${this.name}`;
  }
}

const item1 : AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget

// Polymorphism & Method Override
// Define an abstract class
abstract class AbstractEntity {
  private static nextId : number = 1;
  protected constructor(public id : number, protected name : string) {}
  
  static generateNextId() : number {
    return AbstractEntity.nextId++;
  }
  
  abstract getEntityInfo() : string;
}

// Create a concrete subclass
class Entity extends AbstractEntity {
  constructor(id : number, name : string) {
    super(id, name);
  }
  
  getEntityInfo() : string {
    return `ID : ${this.id}, Name : ${this.name}`;
  }
}

// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
  constructor(id : number, name : string) {
    super(id, name);
  }
  
  getEntityInfo() : string {
    return `ID : ${this.id}, Name : ${this.name}, Additional Info : ...`;
  }
}

// Generate unique IDs for entities using the static method
const entity1 : AbstractEntity = new Entity(AbstractEntity.generateNextId(), "Widget");
const entity2 : AbstractEntity = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");

// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...

// Generics
// A generic function that returns the input value as is
function returnType<T>(val : T) : T {
  return val;
}

// Usage of the generic function with different types
const numValue : number = returnType<number>(100);
const strValue : string = returnType<string>("Elzero");
const boolValue : boolean = returnType<boolean>(true);
const arrValue : number[] = returnType<number[]>([1, 2, 3, 4]);

console.log(`Number Value : ${numValue}`);
console.log(`String Value : ${strValue}`);
console.log(`Boolean Value : ${boolValue}`);
console.log(`Array Value : ${arrValue}`);


// Generics Multiple types
// Generic Function `returnTypeEx`
function returnTypeEx<T>(val: T) : T {
    return val;
  }
  
  console.log(returnTypeEx<number>(100)); // Returns: 100 (number)
  console.log(returnTypeEx<string>("Elzero")); // Returns: "Elzero" (string)
  
  // Arrow Function with Generics `returnTypeArrowSyntax`
  const returnTypeArrowSyntax = <T>(val : T) : T => val;
  
  console.log(returnTypeArrowSyntax<number>(100)); // Returns: 100 (number)
  console.log(returnTypeArrowSyntax<string>("Elzero")); // Returns: "Elzero" (string)
  
  // Generic Function `testType`
  function testType<T>(val : T) : string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
  }
  
  console.log(testType<number>(100));
  // Returns: "The Value Is 100 And Type Is number"
  
  console.log(testType<string>("Elzero"));
  // Returns: "The Value Is Elzero And Type Is string"
  
  // Generic Function `multipleTypes`
  function multipleTypes<T, S>(valueOne : T, valueTwo : S) : string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
  }
  
  // Returns: "The First Value Is Osama And Second Value 100"
  console.log(multipleTypes<string, number>("Osama", 100));
  
  // Returns: "The First Value Is Elzero And Second Value true"
  console.log(multipleTypes<string, boolean>("Elzero", true));
  
  // Generics classes
  
  // Generic Class `User`
class User<T = string> {
  constructor(public value : T) {}
  
  // Method that takes a message of type `T` and displays it along with the `value` property
  show(msg : T) : void {
    console.log(`${msg} - ${this.value}`);
  }
}

// Creating an instance of `User` with a specific type parameter (string) 
let userOne = new User<string>("Elzero");
console.log(userOne.value); // Outputs: "Elzero"
userOne.show("Message"); // Outputs: "Message - Elzero"


// Creating an instance of `User` with a type parameter that can be a number or a string
let userTwo = new User<number | string>(100);
 // Outputs: 100
console.log(userTwo.value);
 // Outputs: "Message - 100"
userTwo.show("Message");


// Generics And Interfaces

// Interface definitions for Book and Game
interface Book {
  itemType : string;
  title : string;
  isbn : number;
}

interface Game {
  itemType : string;
  title : string;
  style : string;
  price : number;
}

// Generic Class `Collection`
class Collection<T> {
  public data : T[] = [];
  
  // Method to add an item of type 'T' to the collection
  add(item : T) : void {
    this.data.push(item);
  }
}

// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection<Book>();
itemOne.add({ itemType : "Book", title : "Atomic Habits", isbn : 150510 });
itemOne.add({ itemType : "Book", title : "Follow Your Heart", isbn : 650650 });
console.log(itemOne);

// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({ itemType : "Game", title : "Uncharted", style : "Action", price : 150 });
console.log(itemTwo);

// Type Assertions
let data: any = "Hadeh";

// Type assertion to treat "data" as a string

// console.log((data as string).repeat(3));



