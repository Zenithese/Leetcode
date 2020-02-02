const alphabet = {"1": "A", "2": "B"}

// var numDecodings = function (s) {
//     if (s == null || s.length === 0) return 0;
//     // if (s[0] === '0') return 0;

//     let slice = Number(s.slice(0, 1));
//     let secondSlice;
//     if (s.length >= 2) secondSlice = Number(s.slice(0, 2));

//     let additive = 0
//     if (secondSlice !== undefined && secondSlice >= 10 && secondSlice <= 26) {
//         additive += 1;
//     } 
//     if (slice >= 1 && slice <= 9) {
//         additive += 1;
//     } 

//     return additive + numDecodings(s.slice(1))
// };

var numDecodings = function (s, initial = true) {
    if (inital && s[0] === 0) return 0;
    if (s.length <= 2) initial = false; 
    let count = 0;
    if (s.length) count += 1

    let slice = Number(s.slice(0, 1));
    let secondSlice;
    if (s.length >= 2) secondSlice = Number(s.slice(0, 2));

    
    if (secondSlice !== undefined && secondSlice >= 10 && secondSlice <= 26) {
        count += numDecodings(s.slice(2), false);
    }
    if (slice >= 1 && slice <= 9) {
        count += numDecodings(s.slice(1), false);
    }

    if (initial) {
        return count - 1;
    } else {
        return count;
    }
};

console.log(numDecodings("22"))

function numDecodings(s) {
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;

    const dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        const a = Number(s.slice(i - 1, i));  // last one digit
        if (a >= 1 && a <= 9) {
            dp[i] += dp[i - 1];
        }

        const b = Number(s.slice(i - 2, i));  // last two digits
        if (b >= 10 && b <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
}