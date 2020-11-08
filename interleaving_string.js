// https://leetcode.com/problems/interleaving-string/

var isInterleave = (s1, s2, s3) => {
    console.log("recursive:", recursiveIsInterleave(s1, s2, s3))
    console.log("memo:", memoIsInterleave(s1, s2, s3))
    console.log("dp:",  dpIsInterleave(s1, s2, s3))
}

// dp Runtime: 88 ms, faster than 60.00 % of JavaScript online submissions for Interleaving String.
// dp Memory Usage: 41.2 MB, less than 10.56 % of JavaScript online submissions for Interleaving String.

var dpIsInterleave = function (s1, s2, s3) {

    if (s1.length + s2.length !== s3.length) return false

    const dp = [...Array(s1.length + 1)].map(_ => new Array)

    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {

            if (i === 0 && j === 0) {
                dp[i][j] = true
            } else if (i === 0) {
                dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]
            } else {
                dp[i][j] = (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1])
            }
            
        }
    }

    return dp[s1.length][s2.length]

};

var recursiveIsInterleave = function (s1, s2, s3, i = 0, j = 0, curr = "") {

    if (curr === s3 && i === s1.length && j === s2.length) return true

    if (i < s1.length && recursiveIsInterleave(s1, s2, s3, i + 1, j, curr + s1[i])) {
        return true
    }
    if (j < s2.length && recursiveIsInterleave(s1, s2, s3, i, j + 1, curr + s2[j])) {
        return true
    }

    return false

};

var memoIsInterleave = function (s1, s2, s3, i = 0, j = 0, curr = "", memo = {}) {

    if (curr in memo) return memo[curr]

    if (curr === s3 && i === s1.length && j === s2.length) return memo[curr] = true

    if (i < s1.length && memoIsInterleave(s1, s2, s3, i + 1, j, curr + s1[i])) {
        return memo[curr] = true
    }
    if (j < s2.length && memoIsInterleave(s1, s2, s3, i, j + 1, curr + s2[j])) {
        return memo[curr] = true
    }

    return memo[curr] = false

};

var anotherMemoIsInterleave = function (s1, s2, s3, i = 0, j = 0, curr = "", memo = [...Array(s1.length + 1)].map(_ => new Array)) {

    if (memo[i][j]) return memo[i][j]

    if (curr === s3 && i === s1.length && j === s2.length) return memo[i][j] = true

    if (i < s1.length && anotherMemoIsInterleave(s1, s2, s3, i + 1, j, curr + s1[i])) {
        return memo[i][j] = true
    }
    if (j < s2.length && anotherMemoIsInterleave(s1, s2, s3, i, j + 1, curr + s2[j])) {
        return memo[i][j] = true
    }

    return memo[i][j] = false

};

const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
isInterleave(s1, s2, s3)