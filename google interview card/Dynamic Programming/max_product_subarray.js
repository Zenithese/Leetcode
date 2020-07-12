// Given an integer array nums, find the contiguous subarray within an array(containing at least one number) which has the largest product.

var maxProduct = function (nums) {

    let product = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let currentProduct = nums[i]
        product = Math.max(product, nums[i])
        for (let j = i + 1; j < nums.length; j++) {
            currentProduct *= nums[j]
            product = Math.max(product, currentProduct)
        }
    }

    return product

};

var optimizedMaxProduct = (nums) => {

    let maxProduct = nums[0], minProduct = nums[0], products = [nums[0]]

    for (let i = 1; i < nums.length; i++) {

        const max = maxProduct
        products.push(maxProduct = Math.max(Math.max(max * nums[i], minProduct * nums[i]), nums[i]))
        products.push(minProduct = Math.min(Math.min(max * nums[i], minProduct * nums[i]), nums[i]))
        
    }

    return products.reduce((a, b) => a > b ? a : b, -Infinity)

}

console.log(maxProduct([2, 3, -2, 4]))
console.log(optimizedMaxProduct([-1, -2, -9, -6])) //=> 108