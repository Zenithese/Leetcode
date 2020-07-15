// Given a positive integer n, find the least number of perfect square numbers(for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:

//     Input: n = 12
//     Output: 3
//     Explanation: 12 = 4 + 4 + 4.

// Example 2:

//     Input: n = 13
//     Output: 2
//     Explanation: 13 = 4 + 9.

function dpNumSquares(n) {


    let dp = new Array(n + 1).fill(Infinity); dp[0] = 0


        for (let i = 1; i <= n; i++) {

            for (let j = 1; j**2 <= i; j++) {

                dp[i] = Math.min(dp[i], dp[i - j**2] + 1)

            }

        }
        

    return dp[n]


}

var numSquares = (n) => dpSquares(getSquares(n), n)

function dpSquares(squares, n) {

    let dp = new Array(n + 1).fill(Infinity); dp[0] = 0

    for (let square of squares) {
        
        for (let i = 1; i <= n; i++) {

            if (square <= i) {

                dp[i] = Math.min(dp[i], dp[i - square] + 1)

            }

        }

    }

    return dp[n]

}

function memoSquares(squares, n, memo = {}) {

    if (n in memo) return memo[n]; if (n === 0) return 0

    let results = []

    for (let square of squares) {

        if (n - square >= 0) {

            results.push(memoSquares(squares, n - square, memo) + 1)

        }

    }

    return memo[n] = Math.min(...results)

}

function getSquares(n) {

    let squares = []

    for (let i = 1; i <= n; i++) {

        if (Number.isInteger(Math.sqrt(i))) {

            squares.push(i)

        }

    }

    return squares

}

// console.log(numSquares(13))
console.log(dpNumSquares(13))