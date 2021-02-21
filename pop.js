'use strict';

// Methods Used
console.log("****Methods Used****");
const arr = [1, 2, 3, 4];
const remove = arr.pop();
console.log(remove);
console.log(arr);


// My Function
console.log("****My function used****");

function myPop(arr) {
    const arrLength = arr.length -1;
    const popValue = arr[arrLength];
    let newArr = [];
    for (let i = 0; i < arrLength; i++){
        newArr = [...newArr, arr[i]];
    }
    return [popValue, newArr];
};

const arr2 = [1, 2, 3, 4];
console.log(myPop(arr2));
