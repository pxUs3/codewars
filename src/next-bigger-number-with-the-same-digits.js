/**
 * <4 kyu> Next bigger number with the same digits
 * https://www.codewars.com/kata/55983863da40caa2c900004e
 * 
 * You have to create a function that takes a positive integer number 
 * and returns the next bigger number formed by the same digits: 12 ==> 21
 */

function nextBigger(n) {
    const numbers = n.toString().split('').reverse();
    let changed = false;
    for (const [i, n] of numbers.slice(1).entries()) {
        if (numbers[i] > n) {
            changed = true;
            numbers[i + 1] = numbers[i];
            numbers[i] = n;
            break;
        }
    }
    if (changed) {
        return parseInt(numbers.reverse().join(''));
    } else {
        return -1;
    }
}

module.exports = nextBigger;