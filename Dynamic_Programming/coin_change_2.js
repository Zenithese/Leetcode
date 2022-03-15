var change = function (amount, coins, memo = {}) {
    let coin = coins[coins.length - 1], key = amount + '-' + coin;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;

    let total = 0;
    for (let i = 0; i * coin <= amount; i++) {
        total += change(amount - i * coin, coins.slice(0, -1), memo)
    }

    return memo[key] = total;
};

// Runtime: 60 ms, faster than 99.43 % of JavaScript online submissions for Coin Change 2.
// Memory Usage: 42.7 MB, less than 57.17 % of JavaScript online submissions for Coin Change 2.

var dpChange = function (amount, coins) {
    dp = new Array(amount + 1).fill(0); dp[0] = 1;

    coins.forEach(coin => {
        for (let amt = coin; amt <= amount; amt++) {
            dp[amt] = dp[amt - coin] + dp[amt];
        }
    })

    return dp[amount];
};

const amount = 5, coins = [1, 2, 5]
console.log(change(amount, coins)) // => 4
console.log(dpChange(amount, coins)) // => 4