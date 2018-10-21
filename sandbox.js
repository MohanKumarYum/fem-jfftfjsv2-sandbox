// declare a person array and initializing it separately.

var person = {}

person[0] = {};

person = {newStr:"I am in the object."};

console.log(person); // { newStr: 'I am in the object.' }

console.log(person[0]); // undefined

console.log(person['0']); // undefined