// Data to be filtered.

const videoData = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Mrs. White',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Rusty',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  }
];

// declare underscore object.
var _ = {};


_.filter = function (list, callback) {
  // Array to be returned.
  var mappedArray = [];
  _.each(list, function (val, index, list) {
    if (callback(val, index, list)){
      mappedArray.push(list[index]);
    };
  });
  return mappedArray;
};

// Define _.each function.

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

let suspectsList = _.filter(videoData, function(suspectObject){
  return suspectObject.present;
});

console.log(suspectsList);

// Result

// SuspectObject with present property is true. -  mappedArray.push(list[index].name);

// [ 'Miss Scarlet',  'Reverend Green',
//   'Colonel Mustard',
//   'Professor Plum' ]

// Result - mappedArray.push(val)


// [ { name: 'Miss Scarlet',    present: true,
//     rooms:     [ [Object], [Object], [Object], [Object], [Object], [Object] ] },
//   { name: 'Reverend Green',    present: true,
//     rooms:     [ [Object], [Object], [Object], [Object], [Object], [Object] ] },
//   { name: 'Colonel Mustard',
//     present: true,    rooms:     [ [Object], [Object], [Object], [Object], [Object], [Object] ] },  { name: 'Professor Plum',    present: true,
//     rooms:
//      [ [Object], [Object], [Object], [Object], [Object], [Object] ] } ]
