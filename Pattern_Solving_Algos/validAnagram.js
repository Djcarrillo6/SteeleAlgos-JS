/*
Given two strings, write a function to determine if the second string is an anagram of the first.

validAnagram('aaz', 'zza') // true
validAnagram('aaz', 'zzay') // false 
*/

function validAnagram(first, second) {
    // edge case: if lengths aren't equal => return falase
    if (first.length !== second.length) { return false };

    // instantiate and obj to track char. frequencies
    const lookup = {};

    // loop over 'first', if it exists in 'lookup', increment; otherwise instatiate(set = 1)
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    };

    // loop over 'second' edge case: if letter if NOT in 'lookup'; return false
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find 'letter' or 'letter' is zero then it not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    };

    return true;
};

/*
Strategy Note:

After the 'lookup' obj if first constructed, the second loop if used to decrement the value by 1 of each key until there are essentially reduced to 0.  If the loop tries to decrement a value of 0; it can't be an anagram, thus returning 'false'.  If however at the end of the second loop all values in 'lookup' have been reduced to zero, then it is an anagram and we can return "true".
*/

