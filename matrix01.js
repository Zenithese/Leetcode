// Runtime: 205 ms, faster than 69.21 % of JavaScript online submissions for 01 Matrix.
// Memory Usage: 55.4 MB, less than 45.81 % of JavaScript online submissions for 01 Matrix.

var updateMatrix = function (mat) {
    const dp = new Array(mat.length).fill().map(() => new Array(mat[0].length).fill(0))

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) continue;
            dp[i][j] = Math.min(
                i > 0 ? dp[i - 1][j] : Infinity, // up
                j > 0 ? dp[i][j - 1] : Infinity  // left
            ) + 1;
        };
    };

    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >= 0; j--) {
            if (mat[i][j] === 0) continue;
            dp[i][j] = Math.min(
                Math.min(
                    i < mat.length - 1 ? dp[i + 1][j] : Infinity, // down
                    j < mat[0].length - 1 ? dp[i][j + 1] : Infinity // right
                ) + 1,
                dp[i][j]
            );
        };
    };

    return dp;
};

// console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))
console.log(updateMatrix([
    [0, 1, 0, 1, 1], 
    [1, 1, 0, 0, 1], 
    [0, 0, 0, 1, 0], 
    [1, 0, 1, 1, 1], 
    [1, 0, 0, 0, 1]
])) // => 
    // [
    //     [0, 1, 0, 1, 2], 
    //     [1, 1, 0, 0, 1], 
    //     [0, 0, 0, 1, 0], 
    //     [1, 0, 1, 1, 1], 
    //     [1, 0, 0, 0, 1]
    // ]