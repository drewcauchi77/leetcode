/**
 * @param {string[]} words
 * @return {string[]}
 */
 
var removeAnagrams = function(words) {
    let stack = [];

    for(let i = 0; i < words.length; i++) {
        const word = words[i].split('').sort().join('');
        const compareWith = stack.length > 0 ? stack[stack.length - 1].split('').sort().join('') : '';
        if(word !== compareWith) stack.push(words[i]);
    }

    return stack;
};

// Test Cases
console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]));
console.log(removeAnagrams(["a","b","c","d","e"]));

// Submitted 24 April 2024 22:02
// Runtime 66ms - beats 73.25%;
// Memory 55.62MB - beats 50.96%