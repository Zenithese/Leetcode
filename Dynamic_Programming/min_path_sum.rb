# https://leetcode.com/problems/triangle/

# Runtime: 44 ms, faster than 83.33% of Ruby online submissions for Triangle.
# Memory Usage: 210.1 MB, less than 16.67% of Ruby online submissions for Triangle.

def minimum_total(triangle)
    for i in (triangle.length - 2).downto(0)
        for j in (0...triangle[i].length)
            triangle[i][j] = triangle[i][j] + [triangle[i + 1][j], triangle[i + 1][j + 1]].min
        end
    end
    
    return triangle[0][0]
end