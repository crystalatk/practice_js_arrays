'use strict';

const myArray = [1, 2, 3, 4];

// using the method
console.log('***built in method***');
const mapArray = myArray.map(element => element + 30);
console.log(mapArray);

console.log('\n\n***my function***');

 let myMapArray = [];
const myMapfunct = (array, func) => {
    let newTerm = 0
    for (let i = 0; i < array.length; i++) {
        newTerm = func(array[i]);
        myMapArray = [...myMapArray, newTerm];
    };
    return myMapArray;
};

const myFunction = (element) => {
    const term = element + 30;
    return term;
}

console.log(myMapfunct(myArray, myFunction));