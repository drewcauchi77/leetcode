/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

var timeRequiredToBuy = function(tickets, k) {
    let numberOfSeconds = 0;
    let currentPointer = 0;

    while(tickets[k] > 0) {
        if(currentPointer == tickets.length) currentPointer = 0;
        if(tickets[currentPointer] > 0) {
            tickets[currentPointer]--;
            numberOfSeconds++;
        }
        currentPointer++;
    }

    return numberOfSeconds;
};

// Test cases
console.log(timeRequiredToBuy([2,3,2], 2));
console.log(timeRequiredToBuy([5,1,1,1], 0));

// Submitted 09 April 2024 19:15
// Runtime 49ms - beats 80.87%;
// Memory 48.64MB - beats 84.15%

// Alternate version
// var timeRequiredToBuy = function(tickets, k) {
//     let total = 0;

//     for(let i = 0; i < tickets.length; i++) {
//         if(i <= k) {
//             total += Math.min(tickets[i], tickets[k]);
//         } else {
//             total += Math.min(tickets[i], tickets[k] - 1);
//         }
//     }

//     return total;
// }