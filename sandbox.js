let _ = require("underscore");
const suspects = ["Miss scarlet", "Colonel Mustard", "Mr. White"];

function CreateSuspectsObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log(`my name is ${name}`);
    },
  };
};

let suspectsList = _.map(suspects, function (name) {
  return CreateSuspectsObjects(name);
});

console.log(suspectsList);

// Result

// [{
//     name: 'Miss scarlet',
//     color: 'scarlet',
//     speak: [Function: speak]
//   },
//   {
//     name: 'Colonel Mustard',
//     color: 'Mustard',
//     speak: [Function: speak]
//   },
//   {
//     name: 'Mr. White',
//     color: 'White',
//     speak: [Function: speak]
//   }
// ]

_.each(suspectsList, function (suspect) {
  suspect.speak();
});

// Result

// my name is Miss scarlet
// my name is Colonel Mustard
// my name is Mr. White