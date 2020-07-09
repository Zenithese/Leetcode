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

    const mid = binarySearch(nums, target)

    for (let i = mid; i < nums.length; i++) {

        let num = nums[i]

        if (num === target && start === -1) start = i

        if (num === target) end = i

        if (num > target) break

    }

    return [start, end]

};