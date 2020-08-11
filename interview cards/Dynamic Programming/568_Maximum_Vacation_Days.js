var maxVacationDays = function (flights, days, k = 0, i = 0, memo = {}) {

    const key = `${i}-${k}`; if (key in memo) return memo[key]; if (k === days[0].length) return 0

    const trips = []
    for (let j = 0; j < flights[i].length; j++) {
        if (flights[i][j]) {
            trips.push(days[j][k] + maxVacationDays(flights, days, k + 1, j, memo))
        } else {
            trips.push(days[i][k] + maxVacationDays(flights, days, k + 1, i, memo))
        }
    }

    return memo[key] = Math.max(...trips)

}

console.log(maxVacationDays(
    [[0, 1, 1], [1, 0, 0], [0, 0, 0]],
    [[7, 0, 4], [7, 2, 1], [2, 6, 2]]
)) // 15

// console.log(maxVacationDays(
//     [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
//     [[0, 0, 7, 0], [2, 0, 0, 7], [7, 7, 7, 7], [7, 7, 7, 7]]
// )) // 14

var maxVacationDays2 = function (flights, days) {

    const dp = new Array(days.length).fill(0).map(a => new Array(days[0].length + 1).fill(0));

    // iterate dp col
    for (let k = days[0].length - 1; k >= 0; k--) {
        // iterate dp row
        for (let i = 0; i < days.length; i++) {
            // for every dp, we need to check every connecting flights   
            for (let j = 0; j < days.length; j++) {
                if (i === j || flights[i][j]) {
                    dp[i][k] = Math.max(dp[i][k], days[j][k] + dp[j][k + 1]);
                }
            }
        }
    }

    return dp[0][0];
};

console.log("2:", maxVacationDays2(
    [[0, 1, 1], [1, 0, 0], [0, 0, 0]],
    [[7, 0, 4], [7, 2, 1], [2, 6, 2]]
)) // 15