/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const mapS = new Map();
    
    for(let i = 0; i < s.length; i++) {
        mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    }

    for(let i = 0; i < t.length; i++) {
        if(mapS.get(t[i])) {
            mapS.set(t[i], mapS.get(t[i]) - 1);
        } else {
            return false;
        }
        if(mapS.get(t[i]) == 0) mapS.delete(t[i]);
    }

    return true;
};

// Test cases
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// Submitted 13 April 2024 21:02
// Runtime 64ms - beats 81.29%;
// Memory 51.40MB - beats 74.13%