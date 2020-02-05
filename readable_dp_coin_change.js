// https://leetcode.com/problems/coin-change/submissions/

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let amt = 1; amt <= amount; amt++) {
        for (let coin of coins) {
            if (amt - coin >= 0) {
                dp[amt] = Math.min(dp[amt], dp[amt - coin] + 1)
            }
        }
    };

    return dp[amount] === Infinity ? -1 : dp[amount];
};