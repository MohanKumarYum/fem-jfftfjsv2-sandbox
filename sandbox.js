// declare a person array and initializing it separately.

var person = [];

person.name = "Mrs. White";

// Primitive types are pass by value. - String, number, boolean, true, false, Undefined & null
// assigning the "name" property of the person object to a variable named who.

var who = person.name;

console.log(who); // "Mrs. White"

console.log(typeof(person) === "array"); // equates to false - person variable defined as an array is an object.

console.log(typeof(person) === "object"); // true - person is an object.

// re-assign a new value to name property of the person object.

person.name = "Mr. White";

// the value of variable who, remains unchanged even after re-assigning the name property.
console.log(who); // "Mrs. White"

// Non-primitive types are store/pass by reference - Object, array, functions, promise......