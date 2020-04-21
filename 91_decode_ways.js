// Runtime: 352 ms, faster than 15.80 % of JavaScript online submissions for Decode Ways.
// Memory Usage: 40.4 MB, less than 14.29 % of JavaScript online submissions for Decode Ways

var numDecodings = function (s, memo = {}) {
    if (memo[s]) return memo[s]
    if (s === "") return 1;
    if (s[0] === "0") return 0;

    let substr = s.substr(0, 2)
    
    if (substr > 9 && substr < 27) {
        memo[s] = numDecodings(s.slice(1, s.length), memo) + numDecodings(s.slice(2, s.length), memo)
    } else {
        memo[s] = numDecodings(s.slice(1, s.length), memo)
    }

    return memo[s]
};

console.log(numDecodings('12332141234234298370912751072304891723048'));