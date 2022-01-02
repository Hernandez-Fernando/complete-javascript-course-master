const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / (markHeight * markHeight);
let johnBMI = johnWeight / johnHeight^2;

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);