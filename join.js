'use strict';


// using methods
console.log('***methods***');
const arr = ['j', 'e', 'd', 'i'];

console.log(arr.join(''));
console.log(arr.join('-'));

// using my function
console.log("*****my function****");

const arr1 = ['j', 'e', 'd', 'i'];

const joinIt = ((arr, btwn) => {
    const arrLength = arr.length;
    let newString = arr[0];
    for (let i = 1; i < arrLength; i++) {
        newString += btwn + arr[i];
    }
    return newString;
});

console.log(joinIt(arr1, ""));
console.log(joinIt(arr1, "-"));
