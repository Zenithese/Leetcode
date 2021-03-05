var threeSum = function (nums, sorted = nums.sort((a, b) => a - b)) {
    const output = []
    for (let i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] > 0) break;
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let left = i + 1;
        let right = sorted.length - 1;
        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];
            if (sum < 0) left += 1;
            else if (sum > 0) right -= 1;
            else {
                output.push([sorted[i], sorted[left], sorted[right]]);
                while (left < right && sorted[left] === sorted[left + 1]) left += 1;
                while (left < right && sorted[right] === sorted[right - 1]) right -= 1;
                left += 1;
                right -= 1;
            }
        }
    }

    return output
};

var _threeSum = function (nums) {
    const output = [];
    const cache = new Set();

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = nums.length - 1; k > j; k--) {
                // while (j < k && nums[j] === nums[j + 1]) j += 1;
                // while (j < k && nums[k] === nums[k - 1]) k -= 1;
                if (nums[i] + nums[j] + nums[k] == 0) {
                    const sum = [nums[i], nums[j], nums[k]];
                    const entry = sum.join('-')
                    if (!cache.has(entry)) {
                        cache.add(entry);
                        output.push(sum);
                    }
                }
            }
        }
    }

    return output;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(_threeSum([-1, 0, 1, 2, -1, -4]))