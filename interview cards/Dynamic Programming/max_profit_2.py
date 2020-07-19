def maxProfit(prices):

    first_profit, second_profit = 0, 0
    first_buy, second_buy = float("inf"), float("inf")

    for price in prices:

        first_buy = min(first_buy, price)
        first_profit = max(first_profit, price - first_buy)
        second_buy = min(second_buy, price - first_profit)
        second_profit = max(second_profit, price - second_buy)

    return second_profit


print(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])) # => 6
