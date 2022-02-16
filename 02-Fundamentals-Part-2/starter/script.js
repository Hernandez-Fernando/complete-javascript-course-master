'use strict';

const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins 🙁');
    }
}

checkWinner(avgDolphins, avgKoalas);