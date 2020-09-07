// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, determine if s can be segmented into a space - separated sequence of one or more dictionary words.

// Note:

    // The same word in the dictionary may be reused multiple times in the segmentation.
    // You may assume the dictionary does not contain duplicate words.

// Example 1:

    // Input: s = "leetcode", wordDict = ["leet", "code"]
    // Output: true
    // Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:

    // Input: s = "applepenapple", wordDict = ["apple", "pen"]
    // Output: true
    // Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
    // Note that you are allowed to reuse a dictionary word.

// Example 3:

    // Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
    // Output: false

var recursiveWordBreak = function (s, wordDict, index = 0, segment = "") {

    const possibleWords = new Set(wordDict)

    for (let i = index; i < s.length; i++) {
        segment += s[i]
        if (possibleWords.has(segment)) {
            if (recursiveWordBreak(s, wordDict, i + 1, segment)) return true
            segment = ""
        }
    }

    return segment === ""

};

var memoWordBreak = function (s, wordDict, index = 0, segment = "", memo = {}) {

    if (index === s.length) return segment === ""
    if (index in memo) return memo[index]
    const possibleWords = new Set(wordDict)

    for (let i = index; i < s.length; i++) {
        segment += s[i]
        if (possibleWords.has(segment)) {
            if (memoWordBreak(s, wordDict, i + 1, segment, memo)) {
                return memo[index] = true
            }
            segment = ""
        }
    }

    return memo[index] = segment === ""

}

var cleanerMemoWordBreak = function (s, wordDict, index = 0, memo = {}) {

    if (index === s.length) return true
    if (index in memo) return memo[index]
    const possibleWords = new Set(wordDict)

    for (let i = index; i < s.length; i++) {
        if (possibleWords.has(s.slice(index, i + 1)) && cleanerMemoWordBreak(s, wordDict, i + 1, memo)) {
            return memo[index] = true
        }
    }

    return memo[index] = false

}

var wordBreak = function (s, wordDict) {

    const possibleWords = new Set(wordDict)
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            if (possibleWords.has(s.slice(i, j))) {
                dp[j] = dp[j] || dp[i]
            }
        }
    }

    return dp[s.length]

};

var anotherWordBreak = function (s, wordDict, index = 0, segment = "") {

    const possibleWords = new Set(wordDict)
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && possibleWords.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];

};

// console.log(memoWordBreak("aaaaaaa", ["aaaa", "aaa"]))
// console.log(memoWordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))

const s ="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
const wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]

console.log(memoWordBreak(s, wordDict))
console.log(wordBreak(s, wordDict))
console.log(anotherWordBreak(s, wordDict))