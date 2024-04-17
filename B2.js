"use strict";
function convert(array, index1, index2) {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        console.log("Chỉ mục không hợp lệ.");
    }
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
let arr = [1, 2, 3, 4, 5];
console.log(convert(arr, 1, 3));
