// https://leetcode.com/problems/burst-balloons/

let memo = {};
var maxCoins = function (nums) {
    if (memo[nums]) return memo[nums];
    
    const length = nums.length
    if (length <= 0) return 0; // edgecase
    if (length === 1) return nums[0]; //edgecase
    
    let total = []
    for (let i = 0; i < length; i++) {
        let product = 0;
        if (length === 2) {
            memo[nums] = nums[0] >= nums[1] ? nums[0] * nums[1] + nums[0] : nums[0] * nums[1] + nums[1]
            return memo[nums]
        } else {
            if (i >= 1) {
                product = i >= length - 1 ? nums[i - 1] * nums[i] : nums[i - 1] * nums[i] * nums[i + 1]
            } else {
                product = nums[0] * nums[1]
            } 
        }
        let copy = nums.slice();
        copy.splice(i, 1);
        total.push(maxCoins(copy) + product);
    }
    
    memo[nums] = Math.max(...total)
    return memo[nums]
};

// let nums = [3, 1, 5, 8]
let nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]
console.log(maxCoins(nums))