/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let totalWeightOnLeft = 0;
    let totalWeightOnRight = nums.reduce((a, b) => a + b);

    for(let i = 0; i < nums.length; i++) {
        let currentWeight = nums[i];
        totalWeightOnRight -= currentWeight;

        if(totalWeightOnLeft == totalWeightOnRight) return i;
        totalWeightOnLeft += currentWeight;
    }

    return -1;
};

// Test cases
console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));