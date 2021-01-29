'use strict';

const myArray = [1, 2, 3, 4];

// using the method
console.log('***built in method***');
const mapArray = myArray.map(element => element + 30);
console.log(mapArray);

console.log('\n\n***my function***');

 let myMapArray = [];
const myMapfunct = (array) => {
    for (let i = 0; i < array.length; i++) {
        myMapArray = [...myMapArray, array[i] += 30];
    };
    return myMapArray;
};

console.log(myMapfunct(myArray));