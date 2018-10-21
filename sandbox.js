// declare a person array and initializing it separately.

var person = [];

var plea = "wouldShe";

person.name = "Mrs. White";

person[plea] = "I would never!"; // using a variable instead of a number, you can use an object or another function with the square brackets.

console.log(person); // [ name: 'Mrs. White', 'wouldShe': 'I would never!' ]

person["digit"] = "Zero property name"; // cannot coerce to string if it starts with a number.

console.log(person.digit); // [ name: 'Mrs. White', 'wouldShe': 'I would never!' ]

person["0digit"] = "Zero property name"; // coerce to string if it starts with a number.

console.log(person); //         [   name: 'Mrs. White',
                                // wouldShe: 'I would never!',
                                // digit: 'Zero property name',
                                // '0digit': 'Zero property name' ]

console.log(person.'0digit'); // errors out - since the compiler cannot evaluate the property "0digit".

console.log(person['0digit']); // Zero property name