var generateParenthesis = function (n) {
    let permutations = [];
    
    var backtrack = function (perm, left, right) {
        if (perm.length === n * 2){
            permutations.push(perm);
            return;
        }
        if (left < n){
            backtrack(perm + '(', left + 1, right);
        }
        if (right < left){
            backtrack(perm + ')', left, right + 1);
        }
    }

    backtrack('', 0, 0);
    return permutations;
};