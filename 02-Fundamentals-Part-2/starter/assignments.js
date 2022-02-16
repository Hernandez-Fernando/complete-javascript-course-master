'use strict';

function describeContry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descUnitedStates = describeContry('United States', 333, 'Washington DC');
const descMexico = describeContry('Mexico', 102, 'Mexico City');
const descFinland = describeContry('Finland', 6, 'Helsinki');

console.log(descUnitedStates, descMexico, descFinland);

// Assignment 2
function percentageOfWorld1(population) {
    const percentage = population / 7900 * 100;
    return percentage;
}

const percentUnitedStates = percentageOfWorld1(333);
const percentMexico = percentageOfWorld1(102);
const percentFinland = percentageOfWorld1(6);

console.log(percentUnitedStates, percentMexico, percentFinland);

const percentageOfWorld2 = function (population) {
    const percentage = population / 7900 * 100;
    return percentage;
};

const percentUnitedStates2 = percentageOfWorld2(333);
const percentMexico2 = percentageOfWorld2(102);
const percentFinland2 = percentageOfWorld2(6);

console.log(percentUnitedStates2, percentMexico2, percentFinland2);

// Assignment 3
const percentageOfWorld3 = population => population / 7900 * 100;
const percentUnitedStates3 = percentageOfWorld3(333);
const percentMexico3 = percentageOfWorld3(102);
const percentFinland3 = percentageOfWorld3(6);

console.log(percentUnitedStates3, percentMexico3, percentFinland3);

// Assignment 4
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people which is about ${percentage}% of the world.`;
}

const descPopulationUnitedStates = describePopulation('United States', 333);
const descPopulationMexico = describePopulation('Mexico', 102);
const descPopulationFinland = describePopulation('Finland', 6);

console.log(descPopulationUnitedStates, descPopulationMexico, descPopulationFinland);