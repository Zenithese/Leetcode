// https://leetcode.com/problems/maximal-square/submissions/
// Runtime: 68 ms, 91.80%
// Memory Usage: 39.7 MB, 100%

var maximalSquare = function (matrix) {
    if (matrix.length === 1 && matrix[0].includes("1")) {
        return 1;
    } else if (matrix.length <= 1) {
        return 0;
    }

    let max = 0;

    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i].length < 2) {
            if (matrix[i].includes("1")) max = 1;
        } else {
            for (let j = 1; j < matrix[i].length; j++) {
                let pos = matrix[i][j];
                let up = matrix[i][j - 1];
                let left = matrix[i - 1][j - 1];
                let diagonal = matrix[i - 1][j];
                if (max === 0 && (pos === '1' || up === '1' || left === '1' || diagonal === '1')) max = 1;
                if (pos === '0') continue;

                if (diagonal !== 0 && left !== 0 && up !== 0) {
                    if (diagonal === up && up === left) {
                        matrix[i][j] = Number(diagonal) + 1;
                    } else {
                        matrix[i][j] = Math.min(Number(diagonal), Number(up), Number(left)) + 1
                    }
                };
                max = Math.max(matrix[i][j], max);
            }
        }
    }

    return max ** 2
};