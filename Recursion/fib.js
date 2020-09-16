/*
Recursion - Fibonacci

Instructions:
Write a recursive function called 'fib' which accepts a number and returns the 'n-th' number in the Fibonacci sequence.  Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers. 
*/

function fib(n) {

    // edge-case: return 1 if n <= 2
    if (n <= 2) return 1;

    // recursive call on the sum of the previous two nunbers
    return fib(n - 1) + fib(n - 2);
};
