let moves = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];

var knightProbability = function (N, K, r, c, memo = {}) {
    let key = `${K}-${r}-${c}`
    if (memo[key]) return memo[key];

    if (K <= 0) return 1;
    let count = 0;

    for (let move of moves) {
        let row = move[0] + r;
        let col = move[1] + c;

        if (row >= 0 && row <= N - 1 && col >= 0 && col <= N - 1) {
            count += knightProbability(N, K - 1, row, col, memo)
        }
    };

    memo[key] = count / 8
    return memo[key]
};