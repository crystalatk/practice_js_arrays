'use strict';

// methods used
console.log('***methods used***');
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// my function
console.log('\n\n***my function***');
const doesInclude = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
console.log(doesInclude(array1, 2));
// expected output: true

console.log(doesInclude(pets, 'cat'));
// expected output: true

console.log(doesInclude(pets, 'at'));
// expected output: false