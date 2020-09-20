/*
Merge Sort


Merging Arrays Note:
* In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
* Given two arrays which are sorted, this helper function should create a new array which is also a sorted, and consists of all of the elements in the two input arrays. 
* This function should run in O(n + m)time and )(n + m)space and SHOULD NOT modify the parameters passed to it. 
    - O(n + m) where 'n' & 'm' are the length of the two input arrays. They are usually a similiar length, if not the same length.  As either of the size of those arrays grows, so does the time needed to finish. 

    **
Psuedo-Code: 



*/

// Merge function from earlier
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) { // push remaining values if one array depletes before the other
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) { // push remaining values if one array depletes before the other
        results.push(arr2[j])
        j++;
    }
    return results;
};
