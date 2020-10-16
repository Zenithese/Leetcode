var findMedianSortedArrays = function (nums1, nums2) {

    let nums = [];

    while (nums1.length || nums2.length) {
        let ele1 = nums1.length ? nums1[0] : Infinity;
        let ele2 = nums2.length ? nums2[0] : Infinity;

        let next;
        if (ele1 < ele2) {
            next = nums1.shift();
        } else {
            next = nums2.shift();
        }

        nums.push(next);
    }

    let mid = Math.floor(nums.length / 2)

    if (nums.length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2
    } else {
        return nums[mid]
    }

};