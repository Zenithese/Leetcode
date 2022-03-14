// Runtime: 449 ms, faster than 33.75 % of JavaScript online submissions for Palindrome Partitioning.
// Memory Usage: 86.1 MB, less than 28.01 % of JavaScript online submissions for Palindrome Partitioning.

var partition = function (s) {
    const pars = []
    function backtrack(s, par = []) {
        const clone = [...par]
        if (!s.length && clone.every(sub => sub == sub.split('').reverse().join(''))) pars.push(clone);
        for (let i = 1; i <= s.length; i++) {
            const sub = s.slice(0, i);
            clone.push(sub);
            backtrack(s.slice(i), clone);
            clone.pop();
        }
    }
    backtrack(s)
    return pars
};

// Runtime: 361 ms, faster than 66.25 % of JavaScript online submissions for Palindrome Partitioning.
// Memory Usage: 86.6 MB, less than 26.93 % of JavaScript online submissions for Palindrome Partitioning.

var partition = function (s) {
    const pars = [];
    const memo = {};
    function isPalindrome(sub) {
        if (memo[sub]) return true;
        return memo[sub] = sub == sub.split('').reverse().join('')
    }
    function backtrack(s, par = []) {
        const clone = [...par]
        if (!s.length && clone.every(sub => isPalindrome(sub))) {
            pars.push(clone);
        }
        for (let i = 1; i <= s.length; i++) {
            const sub = s.slice(0, i);
            clone.push(sub);
            backtrack(s.slice(i), clone);
            clone.pop();
        }
    }
    backtrack(s)
    return pars
};