/*
Pattern: Frequency Counter

Instructions:
Implement a function called 'areThereDuplicates' which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
*/

function areThereDuplicates() {

    // instantiate empty object to server as f-table 
    let collection = {}

    // iterate over keyword 'arguments', if collection[arguments[val]] exists, increment it, otherwise set to 1
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }

    // after table has been updated, iterate over and return true is > 1. Else return false.
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}