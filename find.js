'use strict';

// methods used
console.log('****methods used****');
const myArray = [1, 2, 3, 4, 5];
const found = myArray.find(element => element > 3);
console.log(found);

// my function
console.log('\n\n***my function***');
const findNum = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            return arr[i];
        }
    }
};

console.log(findNum(myArray, 3));