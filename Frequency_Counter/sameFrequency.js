/*
Frequency Counter - sameFrequency

Instructions: Given two positive intergers, find out if the two numbers have the same frequency of digits. 
*/



function sameFrequency(num1, num2) {

    // convert the argument data type from interger to string for interation.
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    // edge-case
    if (strNum1.length !== strNum2.length) return false;

    // instantiate two objects to serve as frequency tables.
    let countNum1 = {};
    let countNum2 = {};

    // loop over strNum1, if obj[i] exists, increment the value count; if it doesn't exist, create and set to 1.
    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    // loop over strNum2, if obj[i] exists, increment the value count; if it doesn't exist, create and set to 1.
    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    // after the f-tables have been created, compare and return boolean.
    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}