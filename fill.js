'use strict';

// methods used
console.log('****methods used****');
const arr = [0, 1, 2, 3, 4, 5];
console.log(arr.fill(0, 2, 4));
console.log(arr.fill(8, 1));
console.log(arr.fill(6));

// my function used
console.log('\n\n****my function****');
const arr2 = [0, 1, 2, 3, 4, 5];
const fillArray = (arr, num, idx1, idx2) => {
    const arrLength = arr.length;
    if (idx1) {
        if (idx2) {
            for (let i = idx1; i < idx2; i++) {
                arr[i] = num
            }
        } else {
            for (let i = idx1; i < arrLength; i++){
                arr[i] = num;
            }
        }
    } else {
        for (let i = 0; i < arrLength; i++) {
            arr[i] = num;
        }
    }
    return arr;
}

console.log(fillArray(arr2, 0, 2, 4));
console.log(fillArray(arr2, 8, 1));
console.log(fillArray(arr2, 6));