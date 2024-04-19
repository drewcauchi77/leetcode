/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    const map = new Map();
    let result = [];

    for(let i = 0; i < strs.length; i++) {
        const string = strs[i].split('').sort().join();
        if(map.has(string)) {
            result[map.get(string)].push(strs[i])
        } else {
            result.push([strs[i]]);
            map.set(string, result.length - 1);
        }
    }

    return result;
};

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

// Submitted 19 April 2024 21:21
// Runtime 116ms - beats 61.33%;
// Memory 62.75MB - beats 59.18%