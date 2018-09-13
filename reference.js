// How do you add two strings together?
console.log("yes"+"no");
// How do you change a string to all uppercase or lowercase?
console.log("john".toUpperCase());
// How do you access the last character of a string, no matter it's length? (Assume you have stored the string in a variable)
console.log("string"[string.length-1]);
// How do you change a string representation of number (e.g. `23`) into an actual number type?
var x = "23";
var x = Number(x);
console.log(typeof x);
// How do you determine whether a number is even or odd?
var x = 3;
if (x % 2 === 0) {
    console.log("Number is even.")
} else {
    console.log("Number is odd.")
};
// How do you tell if some variable is a number or not?
console.log(typeof x);
// What does the `!` operator do?
console.log("The ! operator means not.")
console.log(true == true);
console.log(true !== true);
// What is the difference between `==` and `===` and which should you use?
var x = "1" === 1;
var y = "1" == 1;
//usage is based on situation
console.log("Print"+x+\n"Print"+y);
// How do you represent nothing in JavaScript?
var x = null;
// How do you get the length of an array?
var x = [2, 4, 6, 8, "who do we appreciate"];
console.log(x.length);
// How can you grab the last item of an array? (Assume you have stored the array in a variable)
console.log(x[x.length - 1]);
// How can you add an item to the end of an array?
// How can you add an item to the beginning of an array?
// How can you remove an item from the end of an array?
// How can you remove an item from the beginning of an array?
// How can you access an item at a particular index of an array?
// How can you get the index of an item in an array (e.g. Find the index of `3` in the array `[ 4, 3, 2, 1 ]`)
// How can you add an item to the middle of an array?
// How can you remove an item from the middle of an array?
// How do you access values in an object? (e.g. Access the value of `age` in the object `{ age: 30, name: 'Wes' }`)
var x = {age: 30, name: "wes"};
var key = "age";
console.log(obj.key);
// How do you add a new key-value pair to an object?
// Can you have a value without a key in an object? What about a key without a value?
// What kind of data can you store inside an array or object?
