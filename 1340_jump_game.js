var memo = {}
var maxJumps = function (arr, d) {

    function helper(cur) {
        if (!memo[cur]) {
            let max = 0;
            for (let i = cur + 1; i <= cur + d && i < arr.length && arr[i] < arr[cur]; ++i) {
                max = Math.max(helper(i), max);
            }
            for (let i = cur - 1; i >= cur - d && i >= 0 && arr[i] < arr[cur]; --i) {
                max = Math.max(helper(i), max);
            }
            memo[cur] = 1 + max;
        }
        return memo[cur];
    }

    let ans = 0
    for (i = 0; i < arr.length; i++) ans = Math.max(ans, helper(i));
    return ans
};