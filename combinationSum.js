var combinationSum = function (candidates, target, res = []) {

    const dfs = (target, idx, res, path) => {
        if (target === 0) return res.push([...path]);
        for (let i = idx; i < candidates.length; i++) {
            if (candidates[i] > target) return;
            path.push(candidates[i])
            dfs(target - candidates[i], i, res, path)
            path.pop()
        }
    }

    candidates.sort((a, b) => a - b)
    dfs(target, 0, res, [])
    return res

};