// https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/


// top-down memoized: Runtime: 156 ms, faster than 27.78 % of JavaScript online submissions for Minimum Insertion Steps to Make a String Palindrome.
// top-down memoized: Memory Usage: 54.2 MB, less than 8.33 % of JavaScript online submissions for Minimum Insertion Steps to Make a String Palindrome.

const minInsertions = (s, i = 0, j = s.length - 1, memo = [...Array(s.length)].map(x => Array(s.length).fill(-1))) => {

    if (memo[i][j] > -1) return memo[i][j];

    if (i >= j) return memo[i][j] = 0;

    if (s[i] == s[j]) return memo[i][j] = minInsertions(s, i + 1, j - 1, memo);

    return memo[i][j] = 1 + Math.min(minInsertions(s, i + 1, j, memo), minInsertions(s, i, j - 1, memo));

};

// Dynamic Programming: Runtime: 132 ms, faster than 77.78 % of JavaScript online submissions for Minimum Insertion Steps to Make a String Palindrome.
// Dynamic Programming: Memory Usage: 46.4 MB, less than 8.33 % of JavaScript online submissions for Minimum Insertion Steps to Make a String Palindrome.

const dpMinInsertions = (s, length = s.length, dp = [...Array(length + 1)].map(x => Array(length + 1).fill(0))) => {

    for (let i = length - 1; i >= 0; --i) {
        for (let j = i + 1; j <= length; ++j) {

            if (s[i] == s[j - 1]) {
                dp[i][j] = dp[i + 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1])
            }
            
        }
    }

    return dp[0][length]

}

console.log(minInsertions("tldjbqjdogipebqsohdypcxjqkrqltpgviqtqz"))
console.log(dpMinInsertions("tldjbqjdogipebqsohdypcxjqkrqltpgviqtqz"))