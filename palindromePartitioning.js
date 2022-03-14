// Runtime: 460 ms, faster than 30.70 % of JavaScript online submissions for Palindrome Partitioning.
// Memory Usage: 61.7 MB, less than 99.46 % of JavaScript online submissions for Palindrome Partitioning.

var partition = function (s) {
    const pars = []
    function backtrack(s, par = []) {
        const clone = JSON.parse(JSON.stringify(par))
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