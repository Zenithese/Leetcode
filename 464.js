// https://leetcode.com/problems/can-i-win/

var canIWin = function (maxChoosableInteger, desiredTotal) {
    let arr = new Array(maxChoosableInteger + 1).fill(0).map((_, i) => _ + i)
    // if (arr.reduce((a, b) => a + b, 0) < desiredTotal) return false;
    
    function recurse(arr, desiredTotal, playerOne = true) {
        for (let i = 1; i < arr.length; i++) {
            let num = arr[i];
            let copy = arr.slice();
            let difference = desiredTotal - num;
            copy.splice(i, 1)
            if (difference > 0) {
                if (recurse(copy, difference, !playerOne)) {
                    return true;
                }
            } else if (difference <= 0 && playerOne) {
                return true;
            } 
        }
    }
    
    return recurse(arr, desiredTotal) === undefined ? false : true;
};

console.log(canIWin(10, 11))