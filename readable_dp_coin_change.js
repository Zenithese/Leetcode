var coinChange = function (coins, amount) {
    
    let dp = new Array(amount + 1).fill(Infinity); dp[0] = 0;

    for (let coin of coins) {
        for (let amt = 1; amt <= amount; amt++) {
            if (amt - coin >= 0) {
                dp[amt] = Math.min(dp[amt], dp[amt - coin] + 1);
            };
        };
    };

    return dp[amount] === Infinity ? -1 : dp[amount];

};

console.log(coinChange([1, 2, 5], 11))