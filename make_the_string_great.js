/**
 * @param {string} s
 * @return {string}
 */

var makeGood = function(s) {
    let newString = s[0];

    for(let i = 1; i < s.length; i++) {
        newString += s[i];
        
        if(s[i].toLowerCase() == newString.charAt(newString.length - 2).toLowerCase() && s[i] !== newString.charAt(newString.length - 2)) {
            newString = newString.slice(0, -2);
        }
    }

    return newString
};

// Test cases
makeGood("leEeetcode");
makeGood("abBAcC");
makeGood("s");

// Submitted 05 April 2024 21:49
// Runtime 53ms - beats 83.66%;
// Memory 51.60MB - beats 29.14%

// Alternate version
// var makeGood = function(s) {
//     const stack = [''];

//     for(let i of s) {
//         let top = stack[stack.length - 1];
//         if(top.toLowerCase() === c.toLowerCase() && top !== i) {
//             stack.pop();
//         } else {
//             stack.push(i);
//         }
//     }

//     return stack.join('');
// };