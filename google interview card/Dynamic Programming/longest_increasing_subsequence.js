// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10, 9, 2, 5, 3, 7, 101, 18]
// Output: 4
// Explanation: The longest increasing subsequence is[2, 3, 7, 101], therefore the length is 4.
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity ?

var lengthOfLIS = function (nums) {

    let LIS = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                LIS[i] = Math.max(LIS[i], LIS[j] + 1)
            }
        }
    }

    return nums.length ? Math.max(...LIS) : 0

};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))