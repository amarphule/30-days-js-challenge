// Day 2: Operators

// Activity 1: Arithmatic Operators

function AddNumber(a, b) {
  console.log(`Sum of ${a}, ${b}is: ${a + b}`);
}

function SubNumber(a, b) {
  console.log(`Subtract of ${a}, ${b} is: ${a - b}`);
}

function MultipyNumber(a, b) {
  console.log(`Multiplication of ${a}, ${b}is: ${a + b}`);
}

function DivideNumber(a, b) {
  console.log(`Division of ${a}, ${b}is: ${a + b}`);
}

function FindRemainder(a, b) {
  console.log(`Remainder of ${a}, ${b}is: ${a + b}`);
}

AddNumber(5, 6);
SubNumber(10, 5);
MultipyNumber(5 * 2);
DivideNumber(12, 4);
FindRemainder(89, 9);

// Activity 2: Assignment operators

function addToValue(initialVal, incrementBy) {
  let result = initialVal;
  result += incrementBy;
  console.log(
    `Initial value ${initialVal} increment by ${incrementBy} becomes ${result}`
  );
}

function subToValue(initialVal, decrementBy) {
  let result = initialVal;
  result -= decrementBy;
  console.log(
    `Initial value ${initialVal} decrement by ${decrementBy} becomes ${result}`
  );
}

addToValue(10, 5);
subToValue(10, 2);

// Acitivity 3: Comparison operator
function isGreaterThan(a, b) {
  return a > b;
}

function isLessThan(a, b) {
  return a < b;
}
function isGreaterThanOrEqualTo(a, b) {
  return a >= b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}
function isEqual(a, b) {
  return a == b; // Loose equality
}

function isStrictEqual(a, b) {
  return a === b; // Strict equality
}
// Usage examples
console.log(isGreaterThan(10, 5)); // true
console.log(isLessThan(10, 5)); // false
console.log(isGreaterThanOrEqualTo(10, 5)); // true
console.log(isGreaterThanOrEqualTo(5, 10)); // false
console.log(isEqual(10, "10")); // true (type coercion)
console.log(isStrictEqual(10, "10")); // false (different types)
console.log(isEqual(10, 10)); // true
console.log(isStrictEqual(10, 10)); // true

// Activity 4: Logical Operators
function bothAreTrue(a, b) {
  return a && b;
}

// Usage examples
console.log(bothAreTrue(true, true)); // true
console.log(bothAreTrue(true, false)); // false
console.log(bothAreTrue(false, true)); // false
console.log(bothAreTrue(false, false)); // false

function eitherIsTrue(a, b) {
  return a || b;
}
console.log(eitherIsTrue(true, true)); // true
console.log(eitherIsTrue(true, false)); // true
console.log(eitherIsTrue(false, true)); // true
console.log(eitherIsTrue(false, false)); // false

function notTrue(a) {
  return !a;
}

console.log(notTrue(true)); // false
console.log(notTrue(false)); // true

// Activity 5: Ternory operator
const isAdult = (age) => (age >= 18 ? "Adult" : "Minor");

// Usage examples
console.log(isAdult(20)); // 'Adult'
console.log(isAdult(15)); // 'Minor'
