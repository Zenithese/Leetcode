var totalFruit = function (tree) {
    let score = 0;
    let start = 0;
    let length = tree.length
    while (start < length && score < length - start) {
        let types = {};
        let count = 0;
        let round = 0;
        for (let i = start; i < tree.length; i++) {
            if (count < 2 || types[tree[i]]) {
                round++;
                if (count < 2 && !types[tree[i]]) {
                    count++;
                    types[tree[i]] = true;
                }
            } else {
                break;
            }
        }
        start++;
        score = Math.max(score, round)
    }
    return score;
};