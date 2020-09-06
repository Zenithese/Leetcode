// In a N x N grid representing a field of cherries, each cell is one of three possible integers.

// 0 means the cell is empty, so you can pass through;
// 1 means the cell contains a cherry, that you can pick up and pass through;
// -1 means the cell contains a thorn that blocks your way.

// Your task is to collect maximum number of cherries possible by following the rules below:

// Starting at the position(0, 0) and reaching(N - 1, N - 1) by moving right or down through valid path cells(cells with value 0 or 1);
// After reaching(N - 1, N - 1), returning to(0, 0) by moving left or up through valid path cells;
// When passing through a path cell containing a cherry, you pick it up and the cell becomes an empty cell(0);
// If there is no valid path between(0, 0) and(N - 1, N - 1), then no cherries can be collected.

//     Example 1:

/* Input: */ grid =[
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1]
]
// Output: 5
// Explanation:
// The player started at(0, 0) and went down, down, right right to reach(2, 2).
// 4 cherries were picked up during this single trip, and the matrix becomes[[0, 1, -1], [0, 0, -1], [0, 0, 0]].
//     Then, the player went left, up, up, left to return home, picking up one more cherry.
// The total number of cherries picked up is 5, and this is the maximum possible.

var cherryPickup = function (grid, returning = false, i = 0, j = 0, memo = new Array(grid.length).fill(0).map((_, i) => new Array(grid[i].length))) {

    if (memo[i][j]) return memo[i][j]; if (grid[i][j] === -1) return -Infinity; if (returning && i === 0 && j === 0) return grid[i][j]; /* edge case */ if (grid.length === 1 && grid[0].length === 1) return grid[i][j] > -1 ? grid[i][j] : 0

    const paths = []
    const cherry = grid[i][j]; grid[i][j] = 0

    if (i === grid.length - 1 && j === grid[i].length - 1 && !returning) {

        paths.push(cherry + cherryPickup(grid, true, i - 1, j, memo))
        paths.push(cherry + cherryPickup(grid, true, i, j - 1, memo))

    } else if (!returning) {
        
        if (j < grid[i].length - 1) paths.push(cherry + cherryPickup(grid, returning, i, j + 1, memo))
        if (i < grid.length - 1) paths.push(cherry + cherryPickup(grid, returning, i + 1, j, memo))

    } else if (returning) {

        if (j > 0) paths.push(cherry + cherryPickup(grid, returning, i, j - 1, memo))
        if (i > 0) paths.push(cherry + cherryPickup(grid, returning, i - 1, j, memo))

    }
        
    memo[i][j] = Math.max(...paths)
    if (i === 0 && j === 0) {console.log(memo); return memo[i][j] === -Infinity ? 0 : memo[i][j]}
    return memo[i][j]

}

// console.log(cherryPickup(grid))
// console.log(cherryPickup([
//     [1, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 1],
//     [1, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 1]
// ]))


var cherryPickup2 = function (grid) {
    const N = grid.length;
    let dp = new Array(N).fill(null).map(() =>
        new Array(N).fill(null).map(() =>
            new Array(N).fill(null)))

    /**
     * @param {Number} Ar row for picker A
     * @param {Number} Ac column for picker A
     * @param {Number} Br row for picker B
     */
    let dfs = function (Ar, Ac, Br) {
        let Bc = Ar + Ac - Br;

        if (Ar >= N || Ac >= N || Br >= N || Bc >= N) return -1; // out of boundary
        if (grid[Ar][Ac] < 0 || grid[Br][Bc] < 0) return -1; // meet a thorn
        if ((Ar == N - 1 && Ac == N - 1) || (Br == N - 1 && Bc == N - 1)) return grid[N - 1][N - 1]; // reaches to the end
        if (dp[Ar][Ac][Br] != null) return dp[Ar][Ac][Br]; // memoization

        let curPickup = (Ar == Br && Ac == Bc) ? grid[Ar][Ac] : (grid[Ar][Ac] + grid[Br][Bc]);
        let remainPickUp = Math.max(dfs(Ar + 1, Ac, Br + 1), // A down, B down
            dfs(Ar + 1, Ac, Br),   // A down, B right
            dfs(Ar, Ac + 1, Br + 1), // A right, B down
            dfs(Ar, Ac + 1, Br))   // A right, B right

        if (remainPickUp < 0) return dp[Ar][Ac][Br] = -1; // no available path

        remainPickUp += curPickup;
        dp[Ar][Ac][Br] = remainPickUp;
        if (Ar === 0 && Ac === 0 && Br === 0) console.log(dp)
        return dp[Ar][Ac][Br]
        
    }

    return Math.max(0, dfs(0, 0, 0));
};

console.log(cherryPickup2([
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1]
]))