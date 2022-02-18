// Runtime: 88 ms, faster than 83.53 % of JavaScript online submissions for Combination Sum.
// Memory Usage: 41.1 MB, less than 92.18 % of JavaScript online submissions for Combination Sum.

var combinationSum = function(candidates, target, res = []) {
    
    const dfs = (target, idx, path) => {
        if (target === 0) return res.push([...path]);
        for (let i = idx; i < candidates.length; i++) {
            if (candidates[i] > target) return;
            path.push(candidates[i])
            dfs(target - candidates[i], i, path)
            path.pop()
        }
    }
    
    candidates.sort((a, b) => a - b)
    dfs(target, 0, [])
    return res
    
};