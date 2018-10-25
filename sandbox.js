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

function loopGame(obj) {
    // for (i = 0; i < obj.suspects.length; i++) {
    //     console.log(obj.suspects[i]);
    // }

    // Loop for objects

    for (let key in obj) {
        // console.log(key);
        for (let prop in obj[key]) {
            // console.log(obj[key][prop]);
            for (const prop2 in obj[key][prop]) {
                // console.log(obj[key][prop][prop2]);
                if (obj[key][prop][prop2] === "Rusty") {
                    console.log(`Found'em`);
                } else {
                    console.log("Next time");
                }
            }
        }
    }
}

loopGame(game);

// 2
// { name: 'Rusty', color: 'Orange' }
// { name: 'Miss Scarlet', color: 'Red' }
