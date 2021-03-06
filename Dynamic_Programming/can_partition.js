// Runtime: 100 ms, faster than 96.12 % of JavaScript online submissions for Partition Equal Subset Sum.
// Memory Usage: 40.7 MB, less than 89.66 % of JavaScript online submissions for Partition Equal Subset Sum.

var canPartition = function (nums) {
    nums.sort((a, b) => a - b)
    const sumTotal = nums.reduce((a, b) => a + b, 0)
    const target = sumTotal / 2
    const greatest = nums.pop()
    if (sumTotal % 2) return false;
    if (greatest > target) return false;
    if (greatest === target) return true;

    const cache = new Array(target + 1).fill(false); cache[0] = true;

    for (const num of nums) {
        for (let i = target; i >= num; i--) {
            cache[i] = cache[i] || cache[i - num];
        }
    }

    return cache[target];
};