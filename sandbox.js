// Create an object using bracket and dot notation  that represents the characters and related data you may find in a game of clue.

var game = {};

//{ murder: '???', 
//weapons: [ 'lasers', 'angry cats', 'dish soap' ],
//name: [ 'Miss Scarlet', 'Mr. Green' ] }

// converting object notation for game to array - square brackets
// var game = [];

//[ murder: '???',
//  weapons: [ 'lasers', 'angry cats', 'dish soap' ],
//  name: [ 'Miss Scarlet', 'Mr. Green' ] ]

game.murder = "???";

game["weapons"] = ["lasers","angry cats","dish soap"];

game.name = [];

game.name[0] = "Miss Scarlet";

game.name.push("Mr. Green");

console.log(game);