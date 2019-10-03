var climbStairs = function (n) {
    let table = [1, 1]

    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }

    return table[n];
};