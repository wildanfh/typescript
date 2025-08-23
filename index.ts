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



