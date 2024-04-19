/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    const map = new Map();
    let frequentK = []

    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }

    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for(let i = 0; i < k; i++) {
        frequentK.push(sortedArray[i][0]);
    }
    
    return frequentK;
};

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));

// Submitted 19 April 2024 22:22
// Runtime 58ms - beats 89.91%;
// Memory 52.62MB - beats 79.69%