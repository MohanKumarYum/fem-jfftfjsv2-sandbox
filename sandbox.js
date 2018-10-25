// Nesting - List Transformation.

const game = {};

game["suspects"] = [];

// console.log(game); // { suspects: [] }

game.suspects.push({
    name: "Rusty",
    color: "Orange"
});

game.suspects.push({
    name: "Miss Scarlet",
    color: "Red"
});

// console.log(game); // Returns the entire object.
// // {
//     //     suspects:
//     //     [{ name: 'Rusty', color: 'Orange' },
//     //                         { name: 'Miss Scarlet', color: 'Red' } ] }

// console.log(game["suspects"]);  // Returns just the array of the suspects key
// [ { name: 'Rusty', color: 'Orange' },
//   { name: 'Miss Scarlet', color: 'Red' } ]

// console.log(game.suspects.length);

// function loopGame(obj) {
//     // for (i = 0; i < obj.suspects.length; i++) {
//     //     console.log(obj.suspects[i]);
//     // }

//     // Loop for objects

//     for (let key in obj) {
//         // console.log(key);
//         for (let prop in obj[key]) {
//             // console.log(obj[key][prop]);
//             for (const prop2 in obj[key][prop]) {
//                 // console.log(obj[key][prop][prop2]);
//                 if (obj[key][prop][prop2] === "Rusty") {
//                     console.log(`Found'em`);
//                 } else {
//                     console.log("Next time");
//                 }
//             }
//         }
//     }
// }

// loopGame(game);

// 2
// { name: 'Rusty', color: 'Orange' }
// { name: 'Miss Scarlet', color: 'Red' }

// nested for-in loops output

// Found'em
// Next time
// Next time
// Next time


const firstColor = game["suspects"][0].color;
const secondColor = game["suspects"][1].color;
console.log(firstColor, secondColor); // Orange Red

const [color1, color2] = [game.suspects[0].color, game.suspects[1].color];
console.log(color1, color2); // Orange Red

const [{color: clr1}, {color: clr2} ]= game.suspects;
console.log(clr1, clr2); // Orange Red

const [firstObj,secondObj]= game.suspects;
console.log(firstObj, secondObj); // { name: 'Rusty', color: 'Orange' } { name: 'Miss Scarlet', color: 'Red' }
