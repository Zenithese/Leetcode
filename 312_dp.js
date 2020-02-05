// https://leetcode.com/problems/burst-balloons/

var dpMaxCoins = function (nums) {
    let length = nums.length;
    const dp = new Array(length).fill(0).map(a => new Array(length).fill(0));

    if (!length) return 0;

    for (let size = 0; size < dp.length; size++) {
        let start = 0;
        let end = size;
        while (start < length) {
            for (let burster = start; burster < start + size + 1; burster++) {
                const left = dp[start] && dp[start][burster - 1] || 0;
                const right = dp[burster + 1] && dp[burster + 1][end] || 0;
                const self = (nums[start - 1] === undefined ? 1 : nums[start - 1]) * nums[burster] * (nums[end + 1] === undefined ? 1 : nums[end + 1]);
                dp[start][end] = Math.max(dp[start][end], left + right + self);
            }
            start++;
            end++;
        }
        length--;
    }

    return dp[0][dp.length - 1];
};

// let nums = [3, 1, 5, 8]
let nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]
console.log(dpMaxCoins(nums))