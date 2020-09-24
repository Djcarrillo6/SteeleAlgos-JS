/*
Radix Sort

* Radix Sort Helper Functions

* getDigit(num, place) - returns the digit in 'num' at the given 'place' value. 
* digitCount(num) - returns the number of digits in 'num'. 
* mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list. 

*/


function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
};

/*
Radix Sort Psuedo-Code:
1. Define a function that accepts a list of numbers.
2. Figure out how many digits the largest number has.
3. Loop from k = 0 up to this largest number of digits.
4. For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - Place each number in the corresponding bucket based on its 'k-th' digit
5. Replace our existing array with values in our buckets, starting with 0 and going up to 9.
6. Return the list at the end!
*/

function radixSort(nums) {

    // to determine element with largest number
    let maxDigitCount = mostDigits(nums);

    // loop from k up to largest number of digits 
    for (let k = 0; k < maxDigitCount; k++) {

        // code to create an empty list of 10 sub-arrays
        let digitBuckets = Array.from({
            length: 10
        }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        };
        nums = [].concat(...digitBuckets);
    }
    return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
