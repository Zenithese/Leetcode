# https://leetcode.com/problems/dot-product-of-two-sparse-vectors/submissions/

# Runtime: 176 ms, faster than 100.00% of Ruby online submissions for Dot Product of Two Sparse Vectors.
# Memory Usage: 227.3 MB, less than 14.29% of Ruby online submissions for Dot Product of Two Sparse Vectors.

class SparseVector

=begin
    :type nums: Integer[]
=end
    attr_reader :nums
    def initialize(nums)
        @nums = nums
    end

# Return the dotProduct of two sparse vectors
=begin
    :type vec: SparseVector
    :rtype: Integer
=end
    def dotProduct(vec)
        sum = 0
        
        for index in 0...@nums.length
            sum += @nums[index] * vec.nums[index]
        end
        
        sum
    end
end

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector.new(nums1)
# v2 = SparseVector.new(nums2)
# ans = v1.dotProduct(v2)