// Code Challenge 1
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / (markHeight * markHeight);
let johnBMI = johnWeight / johnHeight^2;

const markHigherBMI = markBMI > johnBMI;

// Code Challenge 2
if (markHigherBMI == 1) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}