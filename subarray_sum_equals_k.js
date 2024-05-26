// Arrays & Hashing

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    let map = new Map();
    let count = 0;
    let sum = 0;
    map.set(0, 1);

    for(const num of nums) {
        sum += num;
        if(map.has(sum - k)) count += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1)
    }

    return count;
};

// Test cases
console.log(subarraySum([1,1,1], 2));
console.log(subarraySum([1,2,3], 3));

// Submitted 26 April 2024 21:24
// Runtime 66ms - beats 91.65%;
// Memory 58.94MB - beats 59.95%