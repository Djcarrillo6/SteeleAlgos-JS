/*
Recursion - The Helper Method

Instructions:
Create a recursive function implementing the 'Helper Method".  This function should accept an array as a parameter, and return all of the odd values in the array.
*/

function collectOddValues(arr) {

    // The 'result' variable is declared within the scope of the outter function.
    let result = [];

    // the recursive 'helper' function; edge-case to return if array is empty
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        // to check if the first index is odd; if so push it into 'result'
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        // recursively call 'helper' and use .slice() to EXCLUDE the first element(sub-array of result)
        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
};

// collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]);


/*
Pure Recursion - collectOddValues

Strategy Note:
    By declaring an empty array each time the function runs on the input array, we can use the .concat() method, along with a recursive function call, to implement the same process and the above example. By using concat, we can call the recurive function on a new sub-array each time.
*/

function collectOddValues(arr) {

    // Define a new array to hold the result 
    let newArr = [];

    // To check if the array is empty - Edge Case
    if (arr.length === 0) {
        return newArr;
    }

    // To check for odd values, if element is odd, push it into 'newArr'.  
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    // Use .concat & call the recursive funtion on a new sub-array each time. 
    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    // Return the newArr which holds the concatenated sub-arrays as one new array(copy) of odd values. 
    return newArr;
}

// collectOddValues([1, 2, 3, 4, 5])




