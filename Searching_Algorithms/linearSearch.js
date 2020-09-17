/*
Linear Search 

Instructions:
Write a function called 'inearSearch', that accepts an array of numbers and a value.  If the 'value' is matches any of the input array's elements, return true; otherwise return -1 
*/

function linearSearch(arr, val) {

    // loop over arr
    for (var i = 0; i < arr.length; i++) {

        // check if current element equals value; if so return the indx
        if (arr[i] === val) return i;
    }

    // return -1 if val is not in the arr 
    return -1;
};

console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100)); // returns -1(falsy)