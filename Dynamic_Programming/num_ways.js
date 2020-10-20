// https://leetcode.com/problems/paint-fence/submissions/

// Runtime: 68 ms, faster than 94.03 % of JavaScript online submissions for Paint Fence.
// Memory Usage: 38.5 MB, less than 7.46 % of JavaScript online submissions for Paint Fence.

var numWays = function (n, k) {
    let table = [0, k, k * k]

    for (let i = 3; i <= n; i++) {
        table.push((table[i - 1] + table[i - 2]) * (k - 1));
    }

    return table[n];
};