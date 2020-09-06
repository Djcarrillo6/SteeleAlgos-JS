/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.  There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4]) // 4


Strategy Notes:

- Set 2 variables to as pointers: i starts at the 0 index & j starts at the 1 index so we can now compare arr[i] to arr[j]. 
- Through the loop, we can built up the from the begining with only the unique values.
- After the loop has finished, all the uniques are built from 0 idx to 'j' and 'i' is now set to the idx of the last unique value, now we can return i + 1 to return the amount of unique values.
*/


function countUniqueValues(arr) {

    // edge case for an empty [] 
    if (arr.length === 0) return 0;

    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};


