function returnSameValue<T>(arg: T) {
    return 1;
}

console.log(returnSameValue(5));
console.log(returnSameValue([1,5,9]));
console.log(returnSameValue(null));

