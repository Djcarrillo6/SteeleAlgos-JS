/*
Multiple Pointers - averagePair

Instructions:
Given a sorted array of intergers, and a target value, determine if there is a pair of values in the array where the average of the pair equals the target average.  There may be more than one pair that matche the average target.

Sample Input:
averagePair([1, 2, 3], 2.5) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false

Constraints:
Time: O(N)
Sapce: O(1)
*/

function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}