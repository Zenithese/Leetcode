// Runtime: 80 ms, faster than 82.05 % of JavaScript online submissions for Predict the Winner.
// Memory Usage: 39.1 MB, less than 46.15 % of JavaScript online submissions for Predict the Winner.

var PredictTheWinner = function (nums) {

    const dp = [...Array(nums.length)].map((_, i) => {
        newArr = Array(nums.length).fill(0)
        newArr[i] = nums[i]
        return newArr
    })

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
        }
    }

    return dp[0][nums.length - 1] >= 0

};