'use strict';

// Methods Used
console.log("****Methods Used****");
const arr = [1, 2, 3, 4];
const remove = arr.pop();
console.log(remove);
console.log(arr);


// My Function
console.log("****My function used****");

let arr2 = [1, 2, 3, 4];

function myPop() {
    const arrLength = arr2.length -1;
    const popValue = arr2[arrLength];
    let newArr = [];
    for (let i = 0; i < arrLength; i++){
        newArr = [...newArr, arr2[i]];
    }
    arr2 = newArr;
    return popValue;
};


console.log(myPop());
console.log(arr2);