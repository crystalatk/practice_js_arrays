'use strict';

// using methods
console.log('****methods used***');
const myArray = [6, 5, 4, 3, 2, 1];
const ascend = myArray.sort();
console.log(ascend)

// I create the function
console.log('\n\n***my function***');

const myArray2 = [6, 5, 4, 3, 2, 1];
const mySort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            };
        };
    };
    return arr
};
console.log(`backwards needs swtiched: ${mySort(myArray2)}`);

const myArray3 = [4, 6, 3, 2, 9, 2, 1, 7];
console.log(`totally mixed with duplicates: ${mySort(myArray3)}`);