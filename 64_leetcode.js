// https://leetcode.com/problems/minimum-path-sum/

function minPathSum(grid) {
    let m = grid.length - 1;
    let n = grid[0].length - 1;

    for (let i = 1; i < grid[0].length; i++) {
        grid[0][i] = grid[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < grid.length; i++) {
        grid[i][0] = grid[i][0] + grid[i - 1][0];
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[i].length; j++) {
            if (grid[i - 1][j] < grid[i][j - 1]) {
                grid[i][j] = grid[i - 1][j] + grid[i][j];
            } else {
                grid[i][j] = grid[i][j - 1] + grid[i][j]
            }
        }
    }
    
    return grid[m][n];
}
input = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
console.log(minPathSum(input));