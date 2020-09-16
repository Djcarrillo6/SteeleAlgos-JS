/*
Recursion - recusriveRange

Instructions:
Write a function called 'recursiveRange' whicch accepts a number and adds up all the numbers from 0 to the number passed to the function.
*/

function recursiveRange(x) {

    // edge-case: return if number passed in is zero.
    if (x === 0) return 0;

    // recusive call and return of sum of x + (x-1)
    return x + recursiveRange(x - 1);
};