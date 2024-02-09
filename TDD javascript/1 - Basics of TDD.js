/*

Basics of TDD - Red > Green > Refactor

1. Red: Write a failing test (unit test)
2. Green: Write production code to pass the test
3. Refactor: Remove any bad code so the code is quality code

*/

// Basic function that multiplies two numbers or number-like objects
class Dollar {
    constructor(amount){
        this.amount = amount;
    }
    multiplication(number){
        return new Dollar(this.amount * number);
    }
}

//---------------------------------------------------------------------------------------------
const assert = require('assert');  // Imports assert package for the assert
let five = new Dollar(5);  // Represents 5 Dollar
let ten = five.multiplication(2);  // Method for multiplication
assert.strictEqual(ten.amount, 10);  // Unit test that checks for 5 x 2 = 10
let twenty = ten.multiplication(2);
assert.strictEqual(twenty.amount, 20);  // Unit test that checks for 10 x 2 = 20
let thirty = ten.multiplication(3);
assert.strictEqual(thirty.amount, 30);  // Unit test that checks for 10 x 3 = 30

// Iteration 1 - ReferenceError: Dollar is not defined
// 1st code - Implementing a Dollar object
// Iteration 2 - TypeError: five.multiplication is not a function
// 2nd code - Implementing the multiplication method
// Iteration 3 - TypeError: Cannot read properties of undefined (reading 'amount')
// 3rd code - Implementing a constructor to create a amount attribute
// Iteration 4 - TypeError: Cannot read properties of undefined (reading 'amount')
// 4th code - Defining a good return for the multiplication method
// Green!
// Refractoring multiplication so it uses amount and multiplication number
// And also making two more unit tests
// Green! We are done refactoring!
