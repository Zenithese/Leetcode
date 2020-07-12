// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

var maxProfit = function (prices) {

    let profit = 0

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                profit = Math.max(profit, prices[j] - prices[i])
            }
        }
    }

    return profit

};

var optimizedMaxProfit = function (prices) {

    let profit = 0, buy = Infinity

    for (let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i])
        profit = Math.max(profit, prices[i] - buy)
    }

    return profit

};

console.log(maxProfit([1, 2]))
console.log(optimizedMaxProfit([1, 2]))