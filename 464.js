// https://leetcode.com/problems/can-i-win/

var canIWin = function (maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= maxChoosableInteger) return true;
    if ((1 + maxChoosableInteger) / 2 * maxChoosableInteger < desiredTotal) return false;
    
    let picked = new Array(maxChoosableInteger + 1).fill(false)

    function recurse(desiredTotal, memo = {}) {

        const key = picked.toString();
        
        if (key in memo) return memo[key];
        
        for (let i = 1; i <= maxChoosableInteger; i++) {

            if (picked[i]) continue;
            
            picked[i] = true;
            
            const difference = desiredTotal - i
            if (difference <= 0 || !recurse(difference, memo)) {
                picked[i] = false
                return memo[key] = true;
            } 

            picked[i] = false

        }
        
        return memo[key] = false
    }
    
    return recurse(desiredTotal);
};

console.log(canIWin(4, 6))