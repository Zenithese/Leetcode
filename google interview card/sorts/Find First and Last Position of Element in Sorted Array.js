var searchRange = function (nums, target) {

    let start = -1
    let end = -1

    function helper(nums, target) {

        if (nums.length <= 1 && nums[0] !== target) {
            return null
        }

        const mid = Math.floor(nums.length / 2)

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            return helper(nums.slice(0, mid), target);
        } else {
            const result = helper(nums.slice(mid + 1, nums.length), target);
            return result === null ? result : mid + 1 + result
        }

    }

    let mid = helper(nums, target)

    while (nums[mid - 1] === target) {
        mid--
    }

    for (let i = mid; i < nums.length; i++) {

        let num = nums[i]

        if (num < target) {
            continue
        }

        if (num === target && start === -1) {
            start = i
        }

        if (num === target) {
            end = i
        }

        if (num > target) {
            break
        }

    }

    return [start, end]

};