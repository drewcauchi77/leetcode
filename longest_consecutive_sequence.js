// Arrays & Hashing

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    let longestSequence = 0;
    
    for(let num of nums) {
        if(!set.has(num - 1)) {
            let lengthCurrSequence = 0;
            
            while(set.has(num + lengthCurrSequence)) {
                lengthCurrSequence++;
            }

            longestSequence = Math.max(lengthCurrSequence, longestSequence)
        }
    }

    return longestSequence;
};

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));

// Submitted 26 April 2024 12:44
// Runtime 1250ms - beats 12.93%;
// Memory 71.36MB - beats 78.92%