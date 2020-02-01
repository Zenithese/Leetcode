var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1){
        return 0;
    } else {
        obstacleGrid[0][0] = 1;
    }

    for (let i = 1; i < obstacleGrid[0].length; i++) {
        if (obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1) {
            obstacleGrid[0][i] = 1;
        } else {
            obstacleGrid[0][i] = 0;
        }
    }

    for (let i = 1; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1) {
            obstacleGrid[i][0] = 1;
        } else {
            obstacleGrid[i][0] = 0;
        }
    }

    for(let i = 1; i < obstacleGrid.length; i++){
        for(let j = 1; j < obstacleGrid[i].length; j++){
            if (obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }

    // return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[obstacleGrid.length - 1].length - 1]
    return obstacleGrid
};


let input = [[0, 0], [1, 1], [0, 0]];
console.log(uniquePathsWithObstacles(input));