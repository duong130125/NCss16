function flattenArray<T>(array: T[][]): T[] {
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}


const nestedArray: number[][] = [1,[2,[3,4],5],6];
const flattenedArray: number[] = flattenArray(nestedArray);
console.log(flattenedArray); 
