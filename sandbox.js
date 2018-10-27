// // _.each utility to iterate through a list.
// var _ = require("underscore");
// // const rooms = ["observatory", "ballroom", "library"];
// // const rooms = {
// //     firstlocation: "observatory",
// //     secondlocation: "ballroom",
// //     thirdlocation: "library"
// // };

// let logger = function (val) {
//     console.log(val);
// };

// // list through objects and print.

// _.each(rooms, logger);

// Result

// observatory
// ballroom
// library

// Own declaration of _.each

var _ = {};

// const rooms = ["observatory", "ballroom", "library"];
const rooms = {"firstlocation":"observatory", "secondlocation":"ballroom", "thirdlocation":"library"};

_.each = function (list, callback) {

    if (typeof callback !== "function") {
        return console.error(`${callback} is not a function.`);   }

    if (Array.isArray(list)) {
        for (let index = 0; index < list.length; index++) {
            callback(list[index], index, list);
        }
    }
    else {
        for (const key in list) {
            callback(list[key], key, list);
        }
    }
}

function fnCallback(val, index, list) {
    console.log(val, index, list);
    if (list[index + 1]) {
        console.log(`${val} is younger than ${list[index + 1]}.`);
    }
    else {
        console.log(`${val} is oldest.`);
    }

};

// list through objects and print.

_.each(rooms, fnCallback);

// Another way to call as an anonymous function.

// _.each(rooms, function fnCallback(val, index, list) {
//     if (list[index + 1]) {
//         console.log(`${val} is younger than ${list[index + 1]}.`);
//     }
//     else {
//         console.log(`${val} is oldest.`);
//     }

// });
