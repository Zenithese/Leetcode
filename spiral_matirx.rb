# https://leetcode.com/problems/spiral-matrix/submissions/

# Runtime: 56 ms, faster than 26.25% of Ruby online submissions for Spiral Matrix.
# Memory Usage: 209.8 MB, less than 17.50% of Ruby online submissions for Spiral Matrix.

require 'set'

def spiral_order(matrix, spiral = [], visited = Set.new)

    row, col = 0, 0
    direction, directions = 0, [[0, 1], [1, 0], [0, -1], [-1, 0]]

    if matrix.length > 0
        m, n = matrix.length, matrix[0].length
        while spiral.length < m * n
            if !visited.include?("#{row}-#{col}")
                spiral << matrix[row][col]
                visited << "#{row}-#{col}"
            end

            direction = (direction + 1) % 4 if (row == m - 1 && direction == 1) || (col == n - 1 && direction == 0) || (row == 0 && direction == 3) || (col == 0 && direction == 2) || visited.include?("#{row + directions[direction][0]}-#{col + directions[direction][1]}")
            row += directions[direction][0]
            col += directions[direction][1]
        end
    end

    spiral

end

p spiral_order([[1,2,3],
                [4,5,6],
                [7,8,9]])