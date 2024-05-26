// Arrays & Hashing

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const set = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) return true;
        set.add(nums[i]);
    }

    return false;
};

// Test cases
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

// Submitted 13 April 2024 20:25
// Runtime 77ms - beats 69.42%;
// Memory 60.00MB - beats 87.87%

// Alternate solution
// var containsDuplicate = function(nums) {
//     return new Set(nums).size < nums.length;
// };