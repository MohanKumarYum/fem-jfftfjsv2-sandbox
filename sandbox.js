// non-valid characters in an array

var box = {};

box["material"] = "cardboard";
box[0] = "meow";
box["^&*"] = "testing 123";

var test = box["^&*"];

var x = {};

x[2 + 2] = true;

console.log(box); // { '0': 'meow', material: 'cardboard', '^&*': 'testing 123' }

console.log(test); // testing 123

console.log(x); // { '4': true }

var obj = {};

obj[function(){}] = false;

console.log(obj);
 
console.log(typeof Object.keys(obj));  // object

console.log(Object.keys(obj)[0]);  // function(){}

console.log(typeof Object.keys(obj)[0]);  // string

obj[(function(){return 3;})()] = false;

console.log(obj); // { '3': false, 'function(){}': false }

console.log((function(){return 3;})()); // 3

var y = {};

console.log(y.length); // undefined

var z = [];

console.log(z.length); // 0

z.name = "Meow";

console.log(z.length); // 0 - Key Value pair is not accounted in the indices of the array

console.log(z); // [ name: 'Meow' ] - even though length is 0, z has the property "name": "Meow"

z.push((function(){return "a";})())

console.log(z); // [ 'a', name: 'Meow' ]

console.log(z.length); // 1

z[10] = "hello";

console.log(z); // [ 'a', <9 empty items>, 'hello', name: 'Meow' ] - 9 empty elements.

console.log(z.length); // 11 - Even though there are 12 elements, the Key value Pair name: 'Meow' is ignored.
