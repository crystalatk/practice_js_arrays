'use strict';

// method filter
console.log('***methods used***')
const myArray = [1, 2, 3, 4, 5, 6];
const filterArr = myArray.filter(num => num === 2 || num === 4);
console.log(filterArr);

console.log('\n\n***my funtion used***');

const myFilteredArray = (arr) => {
    let myNewArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 || arr[i] === 4) {
            myNewArray = [...myNewArray, arr[i]];
        };
    };
    return myNewArray;
}
console.log(myFilteredArray(myArray));