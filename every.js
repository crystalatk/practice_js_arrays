'use strict';

// methods used
console.log('***methods used***');
const arr = [1, 2, 3, 4, 5];
const five = arr.every(num => num > 5);
console.log(five);

// My function
console.log('\n\n***my function***');

const isEveryNum = (arr, num) => {
    const arrLength = arr.length;
    let isNum = false;
    let countTrues = 0
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === num) {
            countTrues += 1;
        }
    }
    if (countTrues === arrLength) {
        isNum = true;
    }
    return isNum;
}

console.log(isEveryNum(arr, 1))

const arr2 = [2, 2, 2, 2];

console.log(isEveryNum(arr2, 2));