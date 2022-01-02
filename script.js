'use strict';
// Strict Mode helps to find bugs

/*
FUNCTIONS
 */

function logger() {
    console.log('Hi');
}

// Call the function
logger();

// Function declaration (can be called before it's declared)
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    return `Juice with ${apples} apples and ${oranges} oranges.`;
}

console.log(fruitProcessor(3, 6));

// Function expression
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

console.log(calcAge(2000));

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(2000));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2000, 'Bob'));

// Calling functions in functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor2(3, 7));

/*
ARRAYS
 */
const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2008, 2020); // Longer syntax

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(`I have ${friends.length} friends.`); // friends.length = 3
// Get last element of every array
console.log(friends[friends.length - 1]);
// Replace element
friends[2] = 'Jay';

/*
ARRAY OPERATIONS
 */
// Adds elements to the end of an array
friends.push('Jay', 'John');
// Adds elements to the beginning of an array
friends.unshift('Jonathan');
// Removes last element
friends.pop();
// Removes first element
friends.shift();
// Returns the position of an element
console.log(friends.indexOf('Steven'));
// Returns true if the element is in the array
console.log(friends.includes('Steven')); // true
console.log(friends.includes('ABC')); // false

/*
OBJECTS
 */
const person = {
    firstName: 'Max',
    lastName: 'Smith',
    age: 2037 - 1991,
    job: 'Dev',
    friends: ['Paul', 'Thomas']
};

console.log(person.firstName, person.lastName);
console.log(person['lastName']);

const nameKey = 'Name';
console.log(person['first' + nameKey]);

person.location = 'Germany';
person['twitter'] = '@person';

console.log(`${person.firstName} has ${person.friends.length} friends, his best friend is ${person.friends[0]}.`);

// Object methods
const person2 = {
    firstName: 'Max',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'Dev',
    friends: ['Paul', 'Thomas'],
    hasDriversLicense: true,

    /*
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
     */

    /*
    calcAge: function () {
        return 2037 - this.birthYear;
    }
     */

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

// console.log(person2['calcAge'](person2.birthYear));
console.log(person2.calcAge());
console.log(person2.age);
console.log(person2.age);

console.log(person2.getSummary());

/*
FOR-LOOP
 */

for (let i = 1; i <= 10; i++) {
    //console.log(i);
}

const array = ['A', 'B', 'C', 3, false, ['X', 'Y']]

// Iterate through arrays
for (let i = 0; i < array.length; i++) {
    if (i !== 3) continue;
    console.log(i);
    break;
}

/*
WHILE-LOOP
 */
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}







