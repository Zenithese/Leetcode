// https://leetcode.com/problems/triangle/submissions/

// Runtime: 84 ms, faster than 42.73 % of JavaScript online submissions for Triangle.
// Memory Usage: 42.6 MB, less than 6.83 % of JavaScript online submissions for Triangle.

var minimumTotal = function (triangle, memo = {}, i = 0, j = 0, layer = triangle[i], key = `${i}-${j}`) {

    if (key in memo) return memo[key]; if (i >= triangle.length) return 0

    const right = Math.min(j + 1, layer.length - 1)

    return memo[key] = Math.min(
        layer[j] + minimumTotal(triangle, memo, i + 1, j),
        layer[right] + minimumTotal(triangle, memo, i + 1, right)
    )

};