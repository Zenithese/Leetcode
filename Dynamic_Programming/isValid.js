// Runtime: 56 ms, faster than 98.52 % of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 48.2 MB, less than 5.05 % of JavaScript online submissions for Valid Parentheses.

var isValid = function (s) {
    if (s.length & 1) return false;

    for (i = 1; i < s.length; i++) {

        if (s[i] === ')' && s[i - 1] === '(') {
            s = s.slice(0, i - 1) + s.slice(i + 1, s.length)
            i -= 2
        }

        if (s[i] === '}' && s[i - 1] === '{') {
            s = s.slice(0, i - 1) + s.slice(i + 1, s.length)
            i -= 2
        }

        if (s[i] === ']' && s[i - 1] === '[') {
            s = s.slice(0, i - 1) + s.slice(i + 1, s.length)
            i -= 2
        }

    }

    return !Boolean(s.length)
};

// Runtime: 68 ms
// Memory Usage: 48.1 MB

const brackets = {
    ")": "(",
    "}": "{",
    "]": "["
};

var isValid = function (s) {
    if (s.length & 1) return false;

    for (i = 1; i < s.length; i++) {

        if (brackets[s[i]] && brackets[s[i]] === s[i - 1]) {
            s = s.slice(0, i - 1) + s.slice(i + 1, s.length)
            i -= 2
        }

    }

    return !Boolean(s.length)
};