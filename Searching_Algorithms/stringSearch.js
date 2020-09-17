/*
String Search (Naive)

Instructions:
Write a function called 'stringSearch', which accepts 2 strings.  If the smaller string is matches the larger string, return the number of matches; otherwise return -1.


Psuedo-Code
- Loop over the longer string.
- Loop over the shorter string 
- If the characters don't match, break out of the inner loop. 
- If the characters do match, keep looping until you hit the end of the short string. 
- If you complete the inner loop and inf a match, increment the count of matches. 
- Return the count. 
*/

function naiveSearch(long, short) {

    // variable to track the numnber of matches
    var count = 0;

    // loop over long string
    for (var i = 0; i < long.length; i++) {

        // loop over short string
        for (var j = 0; j < short.length; j++) {

            // if the first element != the first element in long string then break out of the inner loop.
            if (short[j] !== long[i + j]) break;

            // if we get to the last element of short string and all previous elements match up to the long string, then increment the count vaiable
            if (j === short.length - 1) count++;
        }
    };

    // return the count of matches
    return count;
};

console.log(naiveSearch("lorie loled", "lol"));