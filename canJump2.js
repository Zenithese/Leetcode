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

// Runtime: 178 ms, faster than 37.98 % of JavaScript online submissions for Jump Game II.
// Memory Usage: 44.1 MB, less than 57.52 % of JavaScript online submissions for Jump Game II.

var jump = function (nums) {
    const dp = new Array(nums.length).fill(Infinity); dp[0] = 0;

    nums.forEach((num, i) => {
        for (let j = i + 1; j <= i + num && j < nums.length; j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1);
        };
    });

    return dp[nums.length - 1];
};