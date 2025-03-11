/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
let numResult = Number(result);
console.log("The result is: " + numResult); // While the original code did get the correct output due to implicit conversion, this gets it through excplicit conversion.

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!"); // This is correct. Any non-empty string is considered truthy, even the string "false".
}

let age = "25";
let numAge = Number(age);
let totalAge = numAge + 5;
console.log("Total Age: " + totalAge); // Strings and numbers are concatenated by the + operator. To fix, I converted the sting "age" into a number.

let redDucks = Boolean(null);
if (redDucks) {
  console.log("Ducks are red!");
} else {
  console.log("Ducks aren't red!"); // Example of explicit conversion, converting 0 to false. Also edge case because I used null.
}

let myAge = "My age is " + 35;
console.log(myAge);