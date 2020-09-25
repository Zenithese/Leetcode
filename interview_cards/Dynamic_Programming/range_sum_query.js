// Given a 2D matrix matrix, 
// find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) 
// and lower right corner (row2, col2).

class NumMatrix {
    constructor(matrix) {
        this.data = matrix
    }

    sumRegion(row1, col1, row2, col2) {

        let sum = 0
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.data[i][j]
            }
        }

        return sum

    }

    dP(row1, col1, row2, col2) {

        let dp = new Array(this.data.length + 1).fill(0).map(row => new Array(this.data[0].length + 1).fill(0))

        for (let row = 1; row < dp.length; row++) {
            for (let col = 1; col < dp[0].length; col++) {
                dp[row][col] = this.data[row - 1][col - 1] + dp[row][col - 1] + dp[row - 1][col] - dp[row - 1][col - 1]
            }
        }

        return dp[row2 + 1][col2 + 1] - dp[row1][col2 + 1] - dp[row2 + 1][col1] + dp[row1][col1]

    } // leetcode with get a runtime error if you construct the dp array outsie the contructor, presumably because it is timing the function and not the entire class

}

class DpNumMatrix {
    constructor(matrix) {
        if (matrix == null || matrix.length === 0 || matrix[0].length === 0) return;
        this.dp = new Array(matrix.length + 1).fill(0).map(row => new Array(matrix[0].length + 1).fill(0))
        for (let row = 1; row < this.dp.length; row++) {
            for (let col = 1; col < this.dp[0].length; col++) {
                this.dp[row][col] = matrix[row - 1][col - 1] + this.dp[row][col - 1] + this.dp[row - 1][col] - this.dp[row - 1][col - 1]
            }
        }

    }

    sumRegion(row1, col1, row2, col2) {
        return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1]
    }
} // Runtime: 84 ms, faster than 100.00 % of JavaScript online submissions for Range Sum Query 2D - Immutable.
  // Memory Usage: 40.7 MB, less than 62.61 % of JavaScript online submissions for Range Sum Query 2D - Immutable.

let matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
]

// console.log(new NumMatrix(matrix).sumRegion(2, 1, 4, 3)) // => 8
console.log(new NumMatrix(matrix).sumRegion(2, 1, 4, 3))
console.log(new DpNumMatrix(matrix).sumRegion(2, 1, 4, 3))