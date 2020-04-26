// https://leetcode.com/problems/last-stone-weight-ii/

var tooSlowLastStoneWeightII = function (stones, memo = {}) {
    if (stones === []) return 0;
    const weight = stones.sort().toString();
    if (weight in memo) return memo[weight];
    if (stones.length === 1) return memo[weight] = stones[0];

    let weights = [];
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < stones.length; j++) {
            if (j > i) {
                let newStones = stones.slice(0, stones.length)
                let newStone = Math.abs(newStones.splice(j, 1) - newStones.splice(i, 1));
                if (newStone > 0) newStones.push(newStone);
                weights.push(lastStoneWeightII(newStones, memo))
            }
        }
    }

    return memo[weight] = Math.min(...weights);
};

var destructiveLastStoneWeightII = function (stones, memo = {}, sum = 0) {
    if (stones.length === 0) return Math.abs(sum);
    const copy = stones.slice(), key = `${stones}-${sum}`, stone = copy.shift();
    if (!(key in memo)) memo[key] = Math.min(lastStoneWeightII(copy, memo, sum + stone), lastStoneWeightII(copy, memo, sum - stone));
    return memo[key]
};

var lastStoneWeightII = function (stones, memo = {}, sum = 0, idx = 0) {
    if (stones.length === idx) return Math.abs(sum);
    const key = `${idx}-${sum}`, stone = stones[idx];
    if (!(key in memo)) memo[key] = Math.min(lastStoneWeightII(stones, memo, sum + stone, idx + 1), lastStoneWeightII(stones, memo, sum - stone, idx + 1));
    return memo[key];
};