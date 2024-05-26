// Arrays & Hashing

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    const products = []

    for(let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for(let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    for(let i = 0; i < n; i++) {
        products[i] = prefix[i] * suffix[i];
    }

    return products;
};

// Test cases
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));

// Submitted 20 April 2024 14:55
// Runtime 94ms - beats 50.76%;
// Memory 65.88MB - beats 10.67%