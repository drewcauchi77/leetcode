/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function(s) {
    let combinedString = [];
    let arrayOfOpenBrackets = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ')') combinedString.push(s[i]);
        if(s[i] == ')' && arrayOfOpenBrackets.length > 0) {
            combinedString.push(s[i]);
            arrayOfOpenBrackets.pop();
        } else if(s[i] == '(') {
            arrayOfOpenBrackets.push(combinedString.length - 1);
        }
    }

    while(arrayOfOpenBrackets.length > 0) {
        combinedString.splice(arrayOfOpenBrackets[arrayOfOpenBrackets.length - 1], 1);
        arrayOfOpenBrackets.pop();
    }

    return combinedString.join('');
};

// Test cases
minRemoveToMakeValid("lee(t(c)o)de)");
minRemoveToMakeValid("a)b(c)d");
minRemoveToMakeValid("))((");

// Submitted 06 April 2024 18:16
// Runtime 76ms - beats 61.97%;
// Memory 58.78MB - beats 30.20%