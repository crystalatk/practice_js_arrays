'use strict';


// methods used
console.log("***Methods used!***");
const arr = [1, 2, 3, 4, 3, 6];

const found = arr.indexOf(3);
console.log(found);

const found2 = arr.indexOf(5);
console.log(found2);

// my function
console.log("\n\n***My Function!***");

const findIndex = ((arr, num) => {
    const arrLength = arr.length;
    let index = -1;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === num) {
            index = i;
            break;
        };
    };
    return index;
});
console.log(findIndex(arr, 5));
console.log(findIndex(arr, 3));