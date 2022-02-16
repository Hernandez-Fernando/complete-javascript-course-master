const country = "United States";
const continent = "America";
let population = 332.4;

console.log(country);
console.log(continent);
console.log(population);

// Assigment 2
const isIsland = false;
const language = "English";

console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

// Assignment 3
// language = "Spanish";
// Shows error

//Assignment 4 & 5
console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population > 33);

let description = `${country} is in ${continent}, and its ${population} millon people speak ${language}`;
console.log(description);

// Assignment 6
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} below the average`);
}

// Assingment 7
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 23 or '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 19 or 1143

// Assignment 8
/* const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} */

// Assignement 9
if (language === 'English' && population < 50 && !isIsland) {
	console.log(`You should live in ${country}.`);
} else {
	console.log(`${country} does not meet your criteria.`);
}