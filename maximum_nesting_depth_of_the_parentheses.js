/**
 * @param {string} s
 * @return {number}
 */

var maxDepth = function(s) {
    if(s.length == 0) return 0;
    let count = 0, maxCount = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') count++;
        if(maxCount < count) maxCount = count;
        if(s[i] === ')' && count !== 0) count--;
    }

    return maxCount;
};

// Test cases
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));

// Submitted 04 April 2024 18:54
// Runtime 44ms - beats 94.78%;
// Memory 49.09MB - beats 41.16%