/*
 * <4 kyu> Sum Strings as Numbers
 * https://www.codewars.com/kata/5324945e2ece5e1f32000370
 * Given the string representations of two integers, return the string representation of the sum of those integers.
 */

function sumStrings(a, b) {
    let result = '';

    const aNumbers = a.split('').reverse();
    const bNumbers = b.split('').reverse();
    let main;
    let second;
    if (a.length > b.length) {
        main = aNumbers;
        second = bNumbers;
    } else {
        main = bNumbers;
        second = aNumbers;
    }

    let rest = null;

    for (let i = 0; i < main.length; i++) {
        let current;
        let sum = 0;

        if (rest) {
            sum += parseInt(rest);
            rest = null;
        }

        if (i < second.length) {
            sum += parseInt(main[i]) + parseInt(second[i]);
        } else {
            sum += parseInt(main[i]);
        }
        const stringSum = sum.toString();
        if (stringSum.length > 1) {
            rest = stringSum[0];
            current = stringSum[1];
        } else {
            current = stringSum[0];
        }

        result += current;
    }
  
    if (rest) {
        result += rest;
    }

    return result.split("").reverse().join("").replace(/^0+/, '');
}

module.exports = sumStrings;