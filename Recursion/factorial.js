/*
Recursion - Factorial

Instructions:
Write a function which accepts a number and returns the factorial of that number.  
* A factorial of zero (0!) is ALWAYS 1.
*/


function factorial(num) {

    // edge-case(1): if recursive factorial is called with an input less than zero. 
    if (x < 0) return 0;

    // edge-case(2): if recursive factorial is called with an input <= 1; return 1
    if (x <= 1) return 1;

    // otherwise return the result of the recursive factorial call on 'x-1'(an input one less than the previous call)
    return x * factorial(x - 1);
};

