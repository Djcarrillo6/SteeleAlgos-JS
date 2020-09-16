/*
Recursion - Power

Instructions:
Write a function called 'power' which accepts a base and an exponent.  The function should return the power of the base to the exponent.  This function should mimic the funtionality of 'Math.pow()' - do not worry about negative exponents.
*/


function power(base, exponent) {

    // edge case: return when exponent === 0
    if (exponent === 0) return 1;

    // Recursive call of 'power'; called with 'base', 'exponent - 1', passed as args.
    return base * power(base, exponent - 1);
};