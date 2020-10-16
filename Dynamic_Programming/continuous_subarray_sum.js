// Given a list of non - negative numbers and a target integer k, 
// write a function to check if the array has a continuous subarray 
// of size of at least 2 that sums up to a multiple of k, 
// that is, sums up to n * k where n is also an integer.

// Input: [23, 2, 4, 6, 7], k = 6
// Output: True
// Explanation: Because[2, 4] is a continuous subarray of size 2 and sums up to 6.

// Input: [23, 2, 6, 4, 7], k = 6
// Output: True
// Explanation: Because[23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

var checkSubarraySum = function (nums, k) {

    for (let i = 0; i < nums.length; i++) {
        let sum = [0, 0]
        for (let j = i; j >= 0; j--) {
            sum[0] += nums[j]
            sum[1] += 1
            if ((sum[0] % k === 0 || sum[0] === k) && sum[1] >= 2) return true
        }
    }

    return false

};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
console.log(checkSubarraySum([0], 0))