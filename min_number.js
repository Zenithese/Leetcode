// https://leetcode.com/problems/missing-number-in-arithmetic-progression/submissions/

var missingNumber = function (arr, progression = {}) {

    for (let i = 1; i < arr.length; i++) {
        progression[Math.abs(arr[i] - arr[i - 1])] ? progression[Math.abs(arr[i] - arr[i - 1])]++ : progression[Math.abs(arr[i] - arr[i - 1])] = 1
    }

    let diff = 0
    let value = -Infinity
    for (let key in progression) {
        if (progression[key] > value) {
            value = progression[key]
            diff = Number(key)
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i + 1] - arr[i]) !== diff) return arr[i] > arr[i + 1] ? arr[i] - diff : arr[i] + diff
    }

    return arr[0]

};

var cleanerMissingNumber = function (arr) {
    let len = arr.length;
    let first = arr[0];
    let last = arr[len - 1];
    let diff = last - first;
    let pattern = diff / len;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] !== pattern) {
            return arr[i] + pattern;
        }
        if (i === arr.length - 1) {
            return arr[i];
        }
    }
};