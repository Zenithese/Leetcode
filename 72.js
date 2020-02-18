// https://leetcode.com/problems/edit-distance/submissions/
// Runtime: 84 ms, faster than 79.70 % of JavaScript online submissions for Edit Distance.
// Memory Usage: 38.3 MB, less than 100.00 % of JavaScript online submissions for Edit Distance.


var minDistance = function (word1, word2) {
    let L1 = word1.length;
    let L2 = word2.length;
    let theMatrix = Array(L1 + 1).fill(null).map(() => (Array(L2 + 1).fill(0)));

    for (let i = 0; i <= Math.max(L1, L2); i++) {
        if (theMatrix[0] && theMatrix[0][i] !== undefined) theMatrix[0][i] = i;
        if (theMatrix[i] && theMatrix[i][0] !== undefined) theMatrix[i][0] = i;
    }

    for (let i = 1; i <= L1; i++) {
        for (let j = 1; j <= L2; j++) {
            theMatrix[i][j] = Math.min(
                theMatrix[i - 1][j] + 1, // left
                theMatrix[i][j - 1] + 1, // right
                theMatrix[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0) // diagonal
            );
        }
    }

    return theMatrix[L1][L2];
};

let a = "horse"
let b = "ros"

console.log(minDistance(a, b));