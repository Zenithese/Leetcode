// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

var searchRange = function (nums, target) {

    let start = -1, end = -1

    function binarySearch(nums, target) {

        if (nums.length <= 1 && nums[0] !== target) return null

        let mid = Math.floor(nums.length / 2)

        if (nums[mid] === target) {

            while (nums[mid - 1] === target) mid--

            return mid

        } else if (nums[mid] > target) {

            return binarySearch(nums.slice(0, mid), target)

        } else {

            const result = binarySearch(nums.slice(mid + 1, nums.length), target)

            return result === null ? result : mid + 1 + result

        }

    }

    start = binarySearch(nums, target)

    for (let i = start; i < nums.length; i++) {

        let num = nums[i]

        if (num === target) end = i

        if (num > target) break

    }

    return [start, end]

};