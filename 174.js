// https://leetcode.com/problems/dungeon-game/

var calculateMinimumHP = function (dungeon) {
    let m = dungeon.length;
    let n = dungeon[0].length;

    let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(Infinity))
    dp[m - 1][n] = dp[m][n - 1] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]);
        }
    }

    return dp[0][0];
};

let input = [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]
console.log(calculateMinimumHP(input))