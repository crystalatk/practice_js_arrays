'use strict';

const myArray = ["I", "am", "awesome", "."];

// Using forEach method
console.log('***method in js***')
myArray.forEach(element => {
    console.log(element);
});

// If I were to build it by myself!
console.log('\n\n***function by me***')
const forEachByME = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};

forEachByME(myArray);