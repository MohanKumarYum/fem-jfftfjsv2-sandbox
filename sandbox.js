// declare a person object and initialising it separately.

var person = {};

person.name = "Mrs. White";

// assigning the name property of the person object to a variable named who.

var who = person.name;

console.log(who);

// re-assign a new value to name property of the person object.

person.name = "Mr. White";

// the value of variable who, remains unchanged even after re-assigning the name property.
console.log(who);