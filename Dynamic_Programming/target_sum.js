// https://leetcode.com/problems/target-sum/submissions/

// Runtime: 1224 ms, faster than 47.31 % of JavaScript online submissions for Target Sum.
// Memory Usage: 38.8 MB, less than 5.81 % of JavaScript online submissions for Target Sum.

function findTargetSumWays(nums, S, index = 0, sum = 0) {

    if (index === nums.length) return sum === S ? 1 : 0;

    return (findTargetSumWays(nums, S, index + 1, sum + nums[index])
        + findTargetSumWays(nums, S, index + 1, sum - nums[index]));

}