/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// Not destructured
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

// Destructured
// Place brackets on left side of variable to assign each name to a value
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
// Place brackets on left side of variable to assign each name to a value
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
// Assign names to first 2 values
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
// Place commas to skip values not needed
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest}= favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
