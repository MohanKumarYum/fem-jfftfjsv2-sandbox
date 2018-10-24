// es6 destructuring
// examples from https://www.sitepoint.com/es6-destructuring-assignment/

// var myArray = ['a', 'b', 'c'];

// var one = myArray[0], // es5
//     two = myArray[1],
//     three = myArray[2];

// console.log(`one = ${one}, two = ${two}, three = ${three}`);   // one = a, two = b, three = c 

// es6 destructuring

// const [one, two, three] = myArray; // destructuring es6

// console.log(`one = ${one}, two = ${two}, three = ${three}`);   // one = a, two = b, three = c 


// Ignore certain values

// const [one, , three] = myArray;

// console.log(`one = ${one}, three = ${three}`);   // one = a, three = c

// spread / rest operator

// const [one, ...two] = myArray;

// console.log(`one = ${one}, two = ${two}`);   // one = a, two = b, c

// Destructuring with objects

// const myObject = {
//     one: "a",
//     two: "b",
//     three: "c"
// };

// const { one, two, three } = myObject;

// console.log(`one = ${one}, two = ${two}, three = ${three}`);   // one = a, two = b, three = c 

// Assign properties to variables with any name

// const {
//     one: first,
//     two: second,
//     three: third
// } = myObject;

// console.log(`first = ${first}, second = ${second}, third = ${third}`); // first = a, second = b, third = c

// Complex nested objects

// const meta = {
//     title: "Destructuring Assignment",
//     authors: [{
//         firstname: "Craig",
//         lastname: "Buckler"
//     }
//     ],
//     publisher: {
//         name: "Sitepoint",
//         url: "https://www.sitepoint.com"
//     }
// };

// const {
//     title: doc,
//     authors: [{ firstname: first }],
//     publisher: { url: web },
// } = meta;

// console.log(doc, first, meta.publisher, web); // Destructuring Assignment Craig { name: 'Sitepoint', url: 'https://www.sitepoint.com' } https://www.sitepoint.com

// Caveats

// // This fails - as variables a, b, c are not defined.

// { a, b, c } = myObject;

// // This works
// ({ a, b, c } = myObject);

// console.log(`one = ${one}, two = ${two}, three = ${three}`);   // one = a, two = b, three = c 

// application of destructuring.

// const meta = {
//     title: "Destructuring Assignment",
//     authors: [{
//         firstname: "Craig",
//         lastname: "Buckler"
//     }
//     ],
//     publisher: {
//         name: "Sitepoint",
//         url: "https://www.sitepoint.com"
//     }
// };

// function prettyPrint(
//     {
//         title: pubTitle = 'No title',
//         publisher: { name: pubName = "Sitepoint" }
//     } = {}
// ) {
//     return pubTitle + "," + pubName;
// };

// console.log(prettyPrint(meta));

// console.log(prettyPrint({})); // not working with the above definition - "TypeError: Cannot destructure property `name` of 'undefined' or 'null'"


// Return multiple values from function

// function f() {
//     return [1, 2, 3];
// }

// const [a, b, c] = f();

// console.log(`a = ${a}, b = ${b}, c = ${c}`);   // a = 1, b = 2, c = 3

// for-of iteration

// const books = [
//     {
//         title: "Full stack javascript",
//         author: "Colin Ihrig and Adam Bretz",
//         url: "http://www.sitepoint.com/store/full-stack-javascript-development-mean/"
//     },
//     {
//         title: 'JavaScript: Novice to Ninja',
//         author: 'Darren Jones',
//         url: 'http://www.sitepoint.com/store/leaern-javascript-novice-to-ninja/'
//     },
//     {
//         title: 'Jump Start CSS',
//         author: 'Louis Lazaris',
//         url: 'http://www.sitepoint.com/store/jump-start-css/'
//     },
// ];

// // es5

// for(const b of books){
//     console.log(b.title + " ," + b.author + " ," + b.url);
// }

// // es6

// for(const {title, author, url} of books){
//     console.log(title + " ," + author + " ," + url);
// }

// Regular expression handling.

const [a, b, c, d] = "one two three".match(/\w+/g);

console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);   // a = one, b = two, c = three, d = undefined [no value for d]