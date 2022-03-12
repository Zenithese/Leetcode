var numRollsToTarget = function (n, k, target, memo = []) {
    if (target in memo[target]) return target;
    perms(n, k, target, memo)
    console.log(memo)
    return(memo.length)
};

function perms(n, k, target, memo, permArr = []) {
    if (n === 0) {
        if (permArr.reduce((sum, x) => sum + x, 0) === target) {
            memo.push(permArr)
        }
        return
    }

    for (let i = 1; i <= k; i++) {
        const arr = [...permArr]
        arr.push(i)
        perms(n - 1, k, target, memo, arr)
    }
}

console.log(numRollsToTarget(3, 6, 7))

// const sum = permArr.reduce((sum, x) => sum + x, 0)
// if (sum in memo[sum]) return;

// function diceRolls(n, k, target, res = 0) {
//     if (n === 0) {
//         return target === 0 ? 1 : 0
//     }

//     for (let i = 1; i <= k; i++) {
//         res = res + diceRolls(n - 1, k, target - i, res)
//     }
// }

// console.log(diceRolls(3, 6, 7))

// if (target in memo[target]) return target;
// perms(n, k, target, memo)
// console.log(memo)
// return(memo.length)