// Day 1: Variables and Data Types

// Task/Activities:

// Activity 1: Variable declaration
// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var courses = 5;
console.log("Courses:", courses);

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let username = "Amardeep";
console.log("Name:", username);

// Activity 2: Constant declaration
// Task 3: Declare a variable using `const`, assign it a boolean, and log the value to the console.

const isAdmin = true;
console.log("Admin Role :", isAdmin);

// Activity 3: Data Types
// Task 4: Create different data types (number, string, boolean, array, object) and log each variable type using `typeof` operator.
let price = 100;
let name = "Amar";
let fruits = ["kiwi", "orange", "mango", "banana", "cherry"];
let hasFinished = false;
let user = {
  name: "Amardeep",
  age: 30,
  isAdmin: true,
};

console.log("price:", price, typeof price);
console.log("name:", name, typeof name);
console.log("fruits:", fruits, typeof fruits);
console.log("hasFinished:", hasFinished, typeof hasFinished);
console.log("user:", user, typeof user);

// Activity 4: Reassigning Variable
// Task 2: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let greetingMessage = "Hello world";
console.log("1 Greeting:", greetingMessage);
greetingMessage = "Welcome to Javascript";
console.log("2 Reassign Greeting:", greetingMessage);
