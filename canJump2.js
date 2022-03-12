// Runtime: 1797 ms, faster than 5.02 % of JavaScript online submissions for Jump Game II.
// Memory Usage: 60.5 MB, less than 5.01 % of JavaScript online submissions for Jump Game II.

var jump = function (nums, i = 0, memo = {}) {
    if (i in memo) return memo[i];
    if (i >= nums.length - 1) return 0;

    const attemps = [];
    for (let j = nums[i]; j > 0; j--) {
        if (i + j <= nums.length - 1) {
            attemps.push(jump(nums, i + j, memo) + 1);
        }
    };

    return memo[i] = Math.min(...attemps);
};