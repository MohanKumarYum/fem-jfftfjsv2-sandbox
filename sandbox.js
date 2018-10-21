// declare a person array and initializing it separately.

var person = [];

var plea = "wouldShe";

person.name = "Mrs. White";

person[plea] = "I would never!"; // using a variable instead of a number, you can use an object or another function with the square brackets.

console.log(person); // [ name: 'Mrs. White', 'wouldShe': 'I would never!' ]

console.log(person.wouldShe);
