/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getConcatenation = function(nums) {
    return [...nums, ...nums];
};

// Test cases
console.log(getConcatenation([1,2,1]));
console.log(getConcatenation([1,3,2,1]));

// Submitted 26 April 2024 14:04
// Runtime 62ms - beats 75.13%;
// Memory 51.68MB - beats 67.75%