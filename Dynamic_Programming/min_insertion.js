// https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/


// top-down memoized: Runtime: 156 ms, faster than 27.78 % of JavaScript online submissions for Minimum Insertion Steps to Make a String Palindrome.
// top-down memoized: Memory Usage: 54.2 MB, less than 8.33 % of JavaScript online submissions for Minimum Insertion Steps to Make a String Palindrome.

let minInsertions = (s, i = 0, j = s.length - 1, memo = [...Array(s.length)].map(x => Array(s.length).fill(-1))) => {

    if (memo[i][j] > -1) return memo[i][j];

    if (i >= j) return memo[i][j] = 0;

    if (s[i] == s[j]) return memo[i][j] = minInsertions(s, i + 1, j - 1, memo);

    return memo[i][j] = 1 + Math.min(minInsertions(s, i + 1, j, memo), minInsertions(s, i, j - 1, memo));

};