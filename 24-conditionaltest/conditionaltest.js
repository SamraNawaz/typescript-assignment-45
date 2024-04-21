"use strict";
// Tests for equality and inequality with strings
const string1 = "hello";
const string2 = "world";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
// Tests using the lower case function
const str1 = "Hello";
const str2 = "hello";
console.log(str1.toLowerCase() === str2.toLowerCase()); // True
console.log(str1.toLowerCase() !== str2.toLowerCase()); // False
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
const num1 = 5;
const num2 = 10;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2); // False
console.log(condition1 || condition2); // True
// Test whether an item is in an array
const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True
console.log(array.includes(6)); // False
// Test whether an item is not in an array
console.log(!array.includes(3)); // False
console.log(!array.includes(6)); // True
