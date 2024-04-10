/**
 * @param {number[]} deck
 * @return {number[]}
 */

var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    const ans = [];

    while(deck.length) {
        ans.unshift(deck.pop());
        ans.unshift(ans.pop());
    }

    ans.push(ans.shift());
    return ans;
};

// Test cases
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));
console.log(deckRevealedIncreasing([1,1000]));

// Submitted 10 April 2024 20:58
// Runtime 66ms - beats 41.12%;
// Memory 51.77MB - beats 57.94%