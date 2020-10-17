// https://leetcode.com/problems/longest-chunked-palindrome-decomposition/submissions/

// Runtime: 80 ms, faster than 71.43 % of JavaScript online submissions for Longest Chunked Palindrome Decomposition.
// Memory Usage: 41.4 MB, less than 14.29 % of JavaScript online submissions for Longest Chunked Palindrome Decomposition.

var longestDecomposition = function (text) {

    [left, right, result] = ["", "", 0];

    for (let i = 0, j = text.length - 1; i < Math.floor(text.length / 2); i++, j--) {

        [left, right] = [left + text[i], text[j] + right];

        if (left === right) [left, right, result] = ["", "", result + 2];

    };

    return left === right && text.length % 2 === 0 ? result : result + 1;

};

console.log(longestDecomposition("aaa")) // => 3
console.log(longestDecomposition("ghiabcdefhelloadamhelloabcdefghi")) // => 7
console.log(longestDecomposition("elvtoelvto")) // => 2
console.log(longestDecomposition("bqrcnnqrcb")) // => 6