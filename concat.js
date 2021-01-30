'use strict';

// methods used
console.log('***methods used***');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const myArr = arr1.concat(arr2);
console.log(myArr);

// I made a function
console.log('\n\n***my function***');
const combinedArray = (arrA, arrB) => {
    let newArray = [];
    for (let i = 0; i < arrA.length; i++) {
        newArray = [...newArray, arrA[i]];
    }
    for (let i = 0; i < arrB.length; i++) {
        newArray = [...newArray, arrB[i]];
    };
    return newArray;
};

console.log(combinedArray(arr1, arr2));

