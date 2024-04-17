"use strict";
function flattenArray(array) {
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
