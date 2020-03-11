var maxSubArray = function (nums) {
    let currMax = nums[0];
    let ultiMax = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i])
        if (ultiMax < currMax) ultiMax = currMax;
    }

    return ultiMax;
};