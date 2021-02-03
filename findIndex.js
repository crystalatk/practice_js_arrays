'use strict';


// methods used
console.log('***methods used***');

const arr = [1, 2, 3, 4];
const found = arr.findIndex((element) => element === 2);
console.log(found);

// my function used
console.log('\n\n***my function***');

const findIDX = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
};

console.log(findIDX(arr, 2));