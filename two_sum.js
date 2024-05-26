// Arrays & Hashing

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if(map.has(diff)) {
            return [i, map.get(diff)]
        } else {
            map.set(nums[i], i);
        }
    }
};

// Test cases
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

// Submitted 13 April 2024 21:33
// Runtime 54ms - beats 86.03%;
// Memory 52.08MB - beats 10.65%