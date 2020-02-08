// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

var numRollsToTarget = function (dice, sides, target) {
    if (dice === 0) return memo[target] = target === 0;

    let rolls = []
    for (let side = 0; side < sides; side++) {
        if (side <= target) {
            rolls += numRollsToTarget(dice - 1, sides, target - side, memo)
        }
    }

    return rolls
};

let memo = {}
var memoNumRollsToTarget = function (dice, sides, target) {
    if (memo[`${target}-${dice}`] < Infinity) return memo[`${target}-${dice}`];
    if (dice === 0) return memo[`${target}-${dice}`] = target === 0;

    let rolls = 0
    for (let side = 1; side <= sides; side++) {
        if (side <= target) {
            rolls = (rolls + memoNumRollsToTarget(dice - 1, sides, target - side)) % (1e9 + 7);
        }
    }

    return memo[`${target}-${dice}`] = rolls
};

var dpNumRollsToTarget = function (dice, sides, target) {
    let dp = new Array(dice + 1).fill(0).map(() => new Array(target + 1).fill(0))
    dp[0][0] = 1;

    for (let die = 1; die <= dice; die++) {
        for (let amount = 1; amount <= target; amount++) {
            for (let side = 1; side <= sides; side++) {
                if (side > amount) break;
                dp[die][amount] = (dp[die][amount] + dp[die - 1][amount - side]) % (1e9 + 7);
            }
        }
    }

    return dp[dice][target]
};

var optimizedDpNumRollsToTarget = function (dice, sides, target) {
    let dp = new Array(target + 1).fill(0)
    
    dp[0] = 1;

    for(let die = 1; die <= dice; die++){
        let store = dp.slice();
        
        dp.fill(0)

        for (let amount = 1; amount <= target; amount++){
            for (let side = 1; side <= sides; side++){
                if (side > amount) break;
                dp[amount] = (dp[amount] + store[amount - side]) % (1e9 + 7);
            }
        }
        
    }
   
    return dp[target]
};

console.log(memoNumRollsToTarget(30, 30, 500))
console.log(dpNumRollsToTarget(30, 30, 500))
console.log(optimizedDpNumRollsToTarget(30, 30, 500))