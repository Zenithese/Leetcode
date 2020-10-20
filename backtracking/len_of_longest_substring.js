// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

// Runtime: 584 ms, faster than 6.74 % of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 54.6 MB, less than 5.69 % of JavaScript online submissions for Longest Substring Without Repeating Characters.

var lengthOfLongestSubstring = function (s) {

    let substrings = [], substring = "", backtrack = {}

    for (let i = 0; i < s.length; i++) {
        if (!substring.includes(s[i])) {
            substring += s[i]
            backtrack[s[i]] = i + 1
        } else {
            substrings.push(substring.length)
            backtrack = {
                [substring = s[backtrack[s[i]]]]: (i = backtrack[s[i]]) + 1
            }
        }
    }

    substrings.push(substring.length)
    return Math.max(...substrings)

};

// Runtime: 136 ms, faster than 45.14 % of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 47 MB, less than 5.76 % of JavaScript online submissions for Longest Substring Without Repeating Characters.

var lengthOfLongestSubstring = function (s) {

    let substrings = [], substring = "", backtrack = {}

    for (let i = 0; i < s.length; i++) {
        if (!substring.includes(s[i])) {
            substring += s[i]
            backtrack[s[i]] = i + 1
        } else {
            substrings.push(substring.length)
            substring = s.slice(backtrack[s[i]], i + 1)
            backtrack[s[i]] = i + 1
        }
    }

    substrings.push(substring.length)
    return Math.max(...substrings)

};