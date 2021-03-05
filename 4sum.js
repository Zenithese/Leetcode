var fourSum = function (nums, target) {
    const output = [];
    const cache = new Set();

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            for (let k = j + 1; k < nums.length - 1; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    if (nums[i] + nums[j] + nums[k] + nums[l] == target) {
                        const sum = [nums[i], nums[j], nums[k], nums[l]];
                        const value = sum.join('-')
                        if (!cache.has(value)) {
                            cache.add(value);
                            output.push(sum);
                        }
                    }
                }
            }
        }
    }

    return output;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))