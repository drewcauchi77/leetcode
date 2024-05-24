/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true;
        map.set(nums[i], i);
    }

    return false;
};

// Test Cases
console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

// Submitted 24 May 2024 21:35
// Runtime 91ms - beats 69.20%;
// Memory 72.34MB - beats 37.86%