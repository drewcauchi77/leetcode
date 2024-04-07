/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function(s) {
    let low = 0;
    let high = 0;

    for (const char of s) {
        if(char == '(') {
            low++;
            high++;
        } else if (char == ')') {
            low = Math.max(0, low - 1);
            high--;
        } else if(char == '*') {
            low = Math.max(0, low - 1);
            high++;
        }

        if(high < 0) return false;
    }

    return low == 0;
};

// Test cases
console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));

// Submitted 07 April 2024 17:43
// Runtime 42ms - beats 95.31%;
// Memory 48.74MB - beats 65.34%