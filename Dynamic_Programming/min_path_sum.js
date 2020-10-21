// https://leetcode.com/problems/triangle/submissions/

// Runtime: 68 ms, faster than 99.11 % of JavaScript online submissions for Triangle.
// Memory Usage: 39.3 MB, less than 6.83 % of JavaScript online submissions for Triangle.

var minimumTotal = function (triangle, memo = triangle.map(layer => layer.slice().fill(undefined)), i = 0, j = 0) {

    if (i >= triangle.length) return 0; if (memo[i][j]) return memo[i][j];

    const right = Math.min(j + 1, triangle[i].length - 1)

    return memo[i][j] = Math.min(
        triangle[i][j] + minimumTotal(triangle, memo, i + 1, j),
        triangle[i][right] + minimumTotal(triangle, memo, i + 1, right)
    )

};