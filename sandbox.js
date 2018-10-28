var _ = {};

const suspects = ["Miss scarlet", "Colonel Mustard", "Mr. White"];

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (let index = 0; index < list.length; index++) {
      callback(list[index], index, list);
    }
  } else {
    for (const key in list) {
      if (list.hasOwnProperty(key)) {
        callback(list[key], key, list);
      }
    }
  }
};

// _.each(suspects, function(name){CreateSuspectsObjects(name)});


// Result
// Miss scarlet
// Colonel Mustard
// Mr. White


// version 2 - using another function _.each() within the _.map function.

_.map = function (list, callback) {
  var mappedArray = [];
  _.each(list, function(val, index, list){
  mappedArray.push(callback(val, index, list))});
  return mappedArray;
};

//Result for Version 2 with _.each within the _.map function.

// [{
//   name: 'Miss scarlet',
//   color: 'scarlet',
//   speak: [Function: speak]
// },
//   {
//     name: 'Colonel Mustard', color: 'Mustard',
//     speak: [Function: speak]
//   }, { name: 'Mr. White', color: 'White', speak: [Function: speak] }]

// version 1
// _.map = function (list, callback) {
//   var mappedArray = [];

//   if (Array.isArray(list)) {
//     for (let index = 0; index < list.length; index++) {
//       mappedArray.push(callback(list[index], index, list));
//     }
//   } else {
//     for (const key in list) {
//       mappedArray.push(callback(list[key], key, list));
//     }
//   }
//   return mappedArray;
// };


const callback = function CreateSuspectsObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log(`my name is ${name}`);
    },
  };
};

let suspectsList = _.map(suspects, callback);

console.log(suspectsList);

// Result

// [{
//   name: 'Miss scarlet',
//   color: 'scarlet',
//   speak: [Function: speak]
// },
// {
//   name: 'Colonel Mustard',
//   color: 'Mustard',
//   speak: [Function: speak]
// },
// { name: 'Mr. White', color: 'White', speak: [Function: speak] }]


// console.log(_.map([1, 2, 3], function (val) { return val + 1; }));

// Result 
// [ 2, 3, 4 ]