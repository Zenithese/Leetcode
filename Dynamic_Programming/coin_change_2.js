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

const amount = 5, coins = [1, 2, 5]
console.log(change(amount, coins))