function minChange(coins, amount, memo = {}) {
    
    if (amount in memo) return memo[amount];if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach(coin => {
        if (coin <= amount) {
            numCoins.push(minChange(coins, amount - coin, memo) + 1);
        }
    });

    return memo[amount] = Math.min(...numCoins);
}

function regularMinChange(coins, amount) {

    if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach(coin => {
        if (coin <= amount) {
            numCoins.push(regularMinChange(coins, amount - coin) + 1);
        }
    });

    return Math.min(...numCoins)
}

// console.log(regularMinChange([1, 2, 5], 11))
console.log(minChange([1, 2, 5], 11))