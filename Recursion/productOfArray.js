/*
Recursion - productOfArray

Instructions:
Write a function called productOfArray, which takes in an array of numbers and returns the product of them all. 
*/


function productOfArray(arr) {

    // edge-case: return 1 if arr.length === 0


    // recursive call of productArray, with arr.slice(1) passed as the arg to multiply the first element in the array copy against a new sub-array copy time; return the product.
    return arr[0] * productOfArray(arr.slice(1));
};
